import { legalConfig } from "../../legalConfig";

export default function Datenschutz() {
  const isPre = legalConfig.inFoundationPhase;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 text-default-900 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Datenschutzerklärung</h1>
        <p className="text-sm text-default-500 mt-1">
          Informationen zur Datenverarbeitung nach Art. 13 und 14 DSGVO
        </p>
      </div>

      {/* 1. Verantwortlicher */}
      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold border-b border-default-200 pb-2">1. Verantwortlicher für die Datenverarbeitung</h2>
        <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (EU) 2016/679 (DSGVO) ist:</p>
        
        {isPre ? (
          <div className="p-4 bg-default-100 rounded-xl space-y-1 font-mono text-xs">
            <p className="font-bold">{legalConfig.brandName} (in Gründungsphase)</p>
            <p>Vertreten durch: {legalConfig.responsiblePersonPreFoundation.name}</p>
            <p>Ladefähige Anschrift: {legalConfig.responsiblePersonPreFoundation.address}</p>
            <p>E-Mail: {legalConfig.responsiblePersonPreFoundation.email}</p>
            <p>Geplante Rechtsform: {legalConfig.legalForm}</p>
          </div>
        ) : (
          <div className="p-4 bg-default-100 rounded-xl space-y-1 font-mono text-xs">
            <p className="font-bold">{legalConfig.foundationPostEntry.registeredName}</p>
            <p>Rechtsform: {legalConfig.legalForm}</p>
            <p>Anschrift: {legalConfig.foundationPostEntry.address}</p>
            <p>Vertretung: {legalConfig.foundationPostEntry.boardMembers.join(", ")}</p>
            <p>E-Mail: {legalConfig.foundationPostEntry.email}</p>
          </div>
        )}
      </section>

      {/* 2. Infrastruktur & Datensouveränität */}
      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold border-b border-default-200 pb-2">2. Technische Datensouveränität & Serverstandort</h2>
        <p>
          Die technische Infrastruktur der EFDSOE wird im Sinne der konsequenten europäischen Datensouveränität ausschließlich auf eigenen, dedizierten Servern innerhalb der Europäischen Union betrieben.
        </p>
        <p className="font-medium text-primary">
          Infrastrukturstandort: {legalConfig.infrastructureLocation}
        </p>
        <p>
          Es werden ausdrücklich <strong>keine US-amerikanischen Cloud-Dienste</strong>, keine externen CDN-Netzwerke, keine kommerziellen E-Mail-Dienstanbieter und keine Tracking-Systeme von Drittanbietern (z.B. Google Analytics, Meta Pixel) eingebunden.
        </p>
      </section>

      {/* 3. Kontaktformular */}
      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold border-b border-default-200 pb-2">3. Kontaktformular & Lokale Datenspeicherung</h2>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben (Name, E-Mail-Adresse, Organisation, Kategorie, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns verarbeitet.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-default-700">
          <li><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</li>
          <li><strong>Speicherort:</strong> Die Datenverarbeitung erfolgt direkt über unsere eigene API-Schnittstelle. Die Daten werden ausschließlich lokal auf unserem eigenen Server in Graz verschlüsselt hinterlegt.</li>
          <li><strong>Weitergabe:</strong> Eine Weitergabe an Dritte oder eine Übermittlung in Drittstaaten findet zu keinem Zeitpunkt statt.</li>
          <li><strong>Löschung:</strong> Die Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt.</li>
        </ul>
      </section>

      {/* 4. Betroffenenrechte */}
      <section className="space-y-3 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold border-b border-default-200 pb-2">4. Ihre Rechte als betroffene Person</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten (Art. 15–21 DSGVO).
        </p>
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen E-Mail-Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde (in Österreich: Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien) zu.
        </p>
      </section>
    </div>
  );
}