import { useState } from "react";
import { Icon } from "@iconify/react";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  org: string;
  category: string;
  message: string;
  submittedAt: string;
}

const ADMIN_ENDPOINT = "http://localhost:5001/api/admin/messages";

export default function AdminMessages() {
  const [secret, setSecret] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async (authSecret: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${ADMIN_ENDPOINT}?secret=${encodeURIComponent(authSecret)}`);
      if (!res.ok) {
        throw new Error("Falsches Passwort oder Server nicht erreichbar.");
      }
      const data = await res.json();
      setMessages(data);
      setIsAuthenticated(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Fehler aufgetreten.");
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Nachricht wirklich löschen?")) return;

    try {
      const res = await fetch(`${ADMIN_ENDPOINT}/${id}?secret=${encodeURIComponent(secret)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMessages((prev) => prev.filter((m) => m.id !== id));
      }
    } catch {
      alert("Fehler beim Löschen der Nachricht.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-default-50 p-4">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-default-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Icon icon="tabler:shield-lock" className="size-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-default-950">EFDSOE Admin Portal</h2>
              <p className="text-xs text-default-600">Kontaktanfragen einsehen</p>
            </div>
          </div>

          {error && <div className="p-3 bg-red-50 text-red-600 text-xs rounded-lg">{error}</div>}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchMessages(secret);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-medium text-default-700 mb-1">Admin Passkey</label>
              <input
                type="password"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Passwort eingeben..."
                className="w-full rounded-xl border border-default-200 bg-default-50 px-4 py-2.5 text-sm text-default-900 outline-none focus:border-primary"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 rounded-xl text-sm transition"
            >
              {loading ? "Prüfe Access..." : "Einloggen"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-default-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between bg-white p-6 rounded-2xl border border-default-200">
          <div>
            <h1 className="text-2xl font-bold text-default-950">Kontaktanfragen (Datensouverän)</h1>
            <p className="text-xs text-default-600">Insgesamt {messages.length} Nachricht(en) lokal gespeichert</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchMessages(secret)}
              className="p-2.5 text-default-600 hover:bg-default-100 rounded-xl transition"
              title="Aktualisieren"
            >
              <Icon icon="tabler:refresh" className="size-5" />
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl text-sm font-medium transition"
            >
              Abmelden
            </button>
          </div>
        </div>

        {/* Nachrichten Liste */}
        {messages.length === 0 ? (
          <div className="bg-white rounded-2xl border border-default-200 p-12 text-center text-default-500">
            Keine Kontaktanfragen vorhanden.
          </div>
        ) : (
          <div className="grid gap-4">
            {messages.map((msg) => (
              <div key={msg.id} className="bg-white rounded-2xl border border-default-200 p-6 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-default-100 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-default-950">{msg.name}</h3>
                    <span className="text-xs text-primary font-medium">{msg.email}</span>
                    {msg.org !== "Keine Angabe" && (
                      <span className="ml-2 text-xs text-default-500">• {msg.org}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-default-100 text-default-700 rounded-full text-xs font-medium">
                      {msg.category}
                    </span>
                    <span className="text-xs text-default-400">
                      {new Date(msg.submittedAt).toLocaleString("de-DE")}
                    </span>
                    <button
                      onClick={() => handleDelete(msg.id)}
                      className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition"
                      title="Löschen"
                    >
                      <Icon icon="tabler:trash" className="size-4" />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-default-700 whitespace-pre-wrap leading-relaxed">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
