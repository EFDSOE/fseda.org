import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';

const app = express();
const PORT = 5000;

// CORS & Body-Parser aktivieren
app.use(cors());
app.use(express.json());

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'server', 'subscribers.json');

// Newsletter Route
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Ungültige E-Mail-Adresse.' });
    }

    let subscribers = [];

    // Datei lesen, falls vorhanden
    try {
      const data = await fs.readFile(SUBSCRIBERS_FILE, 'utf-8');
      subscribers = JSON.parse(data);
    } catch {
      subscribers = [];
    }

    // Prüfen, ob die E-Mail schon im Verteiler ist
    if (!subscribers.includes(email)) {
      subscribers.push(email);
      await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
      console.log(`[Newsletter] Neue E-Mail gespeichert: ${email}`);
    }

    return res.status(200).json({ message: 'Erfolgreich in den Verteiler eingetragen!' });
  } catch (error) {
    console.error('Fehler beim Speichern im Verteiler:', error);
    return res.status(500).json({ error: 'Serverfehler' });
  }
});

app.listen(PORT, () => {
  console.log(`Express Backend läuft auf http://localhost:${PORT} 🚀`);
});