import dotenv from "dotenv";
import path from "path";

// Lädt die .env explizit aus dem aktuellen Server-Ordner
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://fseda.org", "https://fseda.online"],
  })
);

app.use(express.json());

// Datenordner & Pfad für Anfragen
const DATA_DIR = path.join(process.cwd(), "data");
const MESSAGES_FILE = path.join(DATA_DIR, "contact_messages.json");

// Automatische Initialisierung ohne Server-Belastung
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2));
}

app.post("/api/contact", (req, res) => {
  const { name, email, org, category, message, privacyAccepted } = req.body;

  // DSGVO & Pflichtfeld-Check
  if (!privacyAccepted) {
    return res.status(400).json({ error: "Datenschutzerklärung muss akzeptiert werden." });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Bitte alle Pflichtfelder ausfüllen." });
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    org: org || "Keine Angabe",
    category,
    message,
    submittedAt: new Date().toISOString(),
  };

  try {
    const fileData = fs.readFileSync(MESSAGES_FILE, "utf-8");
    const messages = JSON.parse(fileData);
    messages.push(newMessage);
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));

    console.log("📩 Neue Anfrage lokal & datensouverän gespeichert:", newMessage.id);
    return res.status(200).json({ success: true, message: "Anfrage gespeichert." });
  } catch (error) {
    console.error("Fehler beim Speichern:", error);
    return res.status(500).json({ error: "Fehler beim Verarbeiten der Nachricht." });
  }
});

app.listen(PORT, () => {
  console.log(`⚡ Schlankes DSGVO-Backend läuft auf Port ${PORT}`);
  console.log(`🔑 ADMIN_SECRET geladen: ${process.env.ADMIN_SECRET ? "JA (" + process.env.ADMIN_SECRET + ")" : "NEIN (Fallback aktiv)"}`);
});
// Geheimes Admin-Passwort (in der Praxis aus process.env.ADMIN_SECRET)
const ADMIN_SECRET = process.env.ADMIN_SECRET || "efdsoe-admin-2026";

// 1. Alle Nachrichten abrufen
app.get("/api/admin/messages", (req, res) => {
  const secret = req.headers["x-admin-secret"] || req.query.secret;

  if (secret !== ADMIN_SECRET) {
    return res.status(401).json({ error: "Nicht autorisiert!" });
  }

  try {
    if (!fs.existsSync(MESSAGES_FILE)) {
      return res.json([]);
    }
    const fileData = fs.readFileSync(MESSAGES_FILE, "utf-8");
    const messages = JSON.parse(fileData);
    
    // Neueste Anfragen zuerst anzeigen
    return res.status(200).json(messages.reverse());
  } catch (error) {
    return res.status(500).json({ error: "Fehler beim Lesen der Nachrichten." });
  }
});

// 2. Nachricht löschen
app.delete("/api/admin/messages/:id", (req, res) => {
  const secret = req.headers["x-admin-secret"] || req.query.secret;
  const { id } = req.params;

  if (secret !== ADMIN_SECRET) {
    return res.status(401).json({ error: "Nicht autorisiert!" });
  }

  try {
    if (!fs.existsSync(MESSAGES_FILE)) {
      return res.status(404).json({ error: "Keine Nachrichten vorhanden." });
    }

    const fileData = fs.readFileSync(MESSAGES_FILE, "utf-8");
    let messages = JSON.parse(fileData);
    
    messages = messages.filter((m: { id: number }) => m.id !== Number(id));
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2));

    return res.status(200).json({ success: true, message: "Nachricht gelöscht." });
  } catch (error) {
    return res.status(500).json({ error: "Fehler beim Löschen." });
  }
});