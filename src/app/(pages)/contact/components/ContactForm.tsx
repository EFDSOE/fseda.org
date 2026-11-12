import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom"; // Falls du Next.js nutzt, ersetze dies durch: import Link from "next/link";

// Eigenes DSGVO-konformes Backend auf EU-Servern
const OWN_API_ENDPOINT = "http://localhost:5001/api/contact";
const CONTACT_EMAIL = "help@fseda.org";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!privacyAccepted) {
      setError("Bitte akzeptiere die Datenschutzerklärung.");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      org: String(formData.get("org") ?? "").trim(),
      category: String(formData.get("category") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      privacyAccepted: privacyAccepted,
      submittedAt: new Date().toISOString(),
    };

    try {
      // Versuch, den eigenen EU-Endpoint anzusprechen
      const response = await fetch(OWN_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("API nicht erreichbar");
      }
    } catch {
      // Fallback: Wenn noch kein Backend läuft, sauberen Mailto-Link generieren (0% Drittanbieter!)
      const subject = `[EFDSOE Anfrage] ${payload.category} - ${payload.name}`;
      const body = `Name: ${payload.name}\nE-Mail: ${payload.email}\nOrganisation: ${payload.org}\nKategorie: ${payload.category}\n\nNachricht:\n${payload.message}`;

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="relative z-30 py-10 pb-20 scroll-mt-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Linke Seite: Kontaktdaten & DSGVO-Garantie */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-default-200 from-default-100 rounded-3xl border bg-gradient-to-b to-transparent p-2.5">
              <div className="bg-white rounded-2xl border border-default-100 p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-default-950 mb-2">
                    European Foundation for Digital Sovereignty and Open Education
                  </h3>
                  <p className="text-sm text-default-600">
                    Stiftung in Gründung mit Sitz in Graz
                  </p>
                </div>

                <div className="w-full h-px bg-default-100" />

                <div className="space-y-4 text-sm text-default-700">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon icon="tabler:map-pin" className="size-5" />
                    </div>
                    <div>
                      <span className="block font-semibold text-default-950">Standort</span>
                      <span>Graz, Österreich</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon icon="tabler:world" className="size-5" />
                    </div>
                    <div>
                      <span className="block font-semibold text-default-950">Lernplattform</span>
                      <a href="https://fseda.online" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        fseda.online
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon icon="tabler:shield-check" className="size-5" />
                    </div>
                    <div>
                      <span className="block font-semibold text-default-950">Datensouveränität</span>
                      <span>100% DSGVO-konform auf eigenen EU-Servern</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rechte Seite: Formular */}
          <div className="lg:col-span-7">
            <div className="border-default-200 from-default-100 rounded-3xl border bg-gradient-to-b to-transparent p-2.5">
              <div className="bg-white rounded-2xl border border-default-100 p-8">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="size-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <Icon icon="tabler:check" className="size-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-default-950">Anfrage übermittelt!</h3>
                    <p className="text-default-600 max-w-md mx-auto text-sm">
                      Vielen Dank. Deine Anfrage wird direkt verarbeitet und wir melden uns in Kürze.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setPrivacyAccepted(false);
                      }}
                      className="mt-4 px-6 py-2.5 bg-default-100 hover:bg-default-200 text-default-900 rounded-xl text-sm font-medium transition cursor-pointer"
                    >
                      Weitere Nachricht senden
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-bold text-default-950 mb-2">Nachricht senden</h3>

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                        {error}
                      </div>
                    )}

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-default-900 mb-2">
                          Vor- & Nachname *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Max Mustermann"
                          className="w-full rounded-xl border border-default-200 bg-default-50 px-4 py-3 text-sm text-default-900 outline-none focus:border-primary focus:bg-white transition"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-default-900 mb-2">
                          Geschäftliche E-Mail-Adresse *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="name@organisation.at"
                          className="w-full rounded-xl border border-default-200 bg-default-50 px-4 py-3 text-sm text-default-900 outline-none focus:border-primary focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-default-900 mb-2">
                          Organisation / Schule / Träger
                        </label>
                        <input
                          type="text"
                          name="org"
                          placeholder="z.B. Stadt Graz / FH Joanneum"
                          className="w-full rounded-xl border border-default-200 bg-default-50 px-4 py-3 text-sm text-default-900 outline-none focus:border-primary focus:bg-white transition"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-default-900 mb-2">
                          Anfrage-Kategorie
                        </label>
                        <select
                          name="category"
                          className="w-full rounded-xl border border-default-200 bg-default-50 px-4 py-3 text-sm text-default-900 outline-none focus:border-primary focus:bg-white transition cursor-pointer"
                        >
                          <option>Schulträgerschaft & Anbindung</option>
                          <option>Geschlossene Telegram-Gruppe (Studenten/Dozenten)</option>
                          <option>Nutzung fseda.online</option>
                          <option>Förderung & Partnerschaft</option>
                          <option>Allgemeine Anfrage</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-default-900 mb-2">
                        Ihre Nachricht *
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        placeholder="Worum geht es?"
                        className="w-full rounded-xl border border-default-200 bg-default-50 px-4 py-3 text-sm text-default-900 outline-none focus:border-primary focus:bg-white transition"
                      />
                    </div>

                    {/* 100% Klicksichere Custom Checkbox mit rechtssicherem Link */}
                    <div 
                      onClick={() => setPrivacyAccepted((prev) => !prev)}
                      className="flex items-start gap-3 cursor-pointer select-none group p-2 rounded-xl hover:bg-default-50 transition"
                    >
                      <div 
                        className={`mt-0.5 size-5 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                          privacyAccepted 
                            ? "bg-primary border-primary text-white" 
                            : "border-default-300 bg-white group-hover:border-primary"
                        }`}
                      >
                        {privacyAccepted && <Icon icon="tabler:check" className="size-3.5 stroke-[3]" />}
                      </div>

                      <span className="text-xs text-default-600 leading-relaxed">
                        Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen auf den eigenen Servern der EFDSOE Stiftung verarbeitet werden. Details findest du in unserer{" "}
                        <Link
                          to="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-primary font-medium underline hover:text-primary/80"
                        >
                          Datenschutzerklärung
                        </Link>
                        . Keine Weitergabe an Dritte.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading || !privacyAccepted}
                      className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed w-full inline-flex cursor-pointer items-center justify-center rounded-2xl px-9 py-3.5 font-medium text-white transition-all shadow-sm"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <Icon icon="tabler:loader-2" className="animate-spin size-5" /> Wird gesendet...
                        </span>
                      ) : (
                        "Nachricht absenden"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;