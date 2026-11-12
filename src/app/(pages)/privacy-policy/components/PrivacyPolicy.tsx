interface PrivacyPolicyProps {
  lang?: "de" | "en";
}

const PrivacyPolicy = ({ lang = "de" }: PrivacyPolicyProps) => {
  return (
    <section className="overflow-hidden relative size-full lg:pb-50 pb-25">
      <div className="container max-w-245! relative z-10 text-default-700 leading-relaxed space-y-8">
        
        {/* Section 1 */}
        <div>
          <h2 className="lg:text-[28px] text-2xl font-bold text-default-950 mb-3">
            {lang === "de" ? "1. Datenschutz auf einen Blick" : "1. Privacy at a Glance"}
          </h2>
          <p className="mb-4">
            {lang === "de"
              ? "Der Schutz deiner persönlichen Daten ist für das FSEDA Ökosystem (fseda.org, fseda.online, fseda.eu) von höchster Priorität. Diese Datenschutzerklärung informiert dich darüber, welche Daten wir erheben und wie wir sie verarbeiten."
              : "Protecting your personal data is a top priority across the FSEDA ecosystem (fseda.org, fseda.online, fseda.eu). This policy explains what data we collect and how we process it."}
          </p>
          <ul className="list-disc list-inside space-y-2 text-default-600 bg-default-100/50 p-5 rounded-2xl border border-default-200">
            <li>
              <strong>{lang === "de" ? "Verantwortlich:" : "Responsible:"}</strong> FSEDA Network Team (info@fseda.org)
            </li>
            <li>
              <strong>{lang === "de" ? "Verschlüsselung:" : "Encryption:"}</strong> {lang === "de" ? "End-to-End TLS/SSL für alle Web- & Mail-Dienste" : "End-to-End TLS/SSL for all Web & Mail services"}
            </li>
            <li>
              <strong>{lang === "de" ? "Server-Standort:" : "Server Location:"}</strong> {lang === "de" ? "EU-Hosting unter strikter DSGVO-Einhaltung" : "EU Hosting strictly under GDPR compliance"}
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="lg:text-[28px] text-2xl font-bold text-default-950 mb-3">
            {lang === "de" ? "2. Datenerfassung auf unseren Webseiten & Services" : "2. Data Collection on Our Websites & Services"}
          </h2>
          <p className="mb-4">
            {lang === "de"
              ? "Wir erfassen personenbezogene Daten nur, wenn du sie uns freiwillig mitteilst (z. B. bei der Registrierung für den Newsletter oder bei der Nutzung unserer Mail-Infrastruktur)."
              : "We only collect personal information when provided voluntarily (e.g., newsletter registration or mail infrastructure usage)."}
          </p>
          <ol className="list-decimal list-inside space-y-2.5 text-default-600">
            <li>
              <strong>{lang === "de" ? "Server-Log-Files:" : "Server Log Files:"}</strong> {lang === "de" ? "IP-Adresse, Browser-Typ, Zeitstempel (automatisch anonymisiert zur Systemsicherheit)." : "IP address, browser type, timestamp (automatically anonymized for system security)."}
            </li>
            <li>
              <strong>{lang === "de" ? "E-Mail-Dienste (WildDuck/ZoneMTA):" : "Email Services (WildDuck/ZoneMTA):"}</strong> {lang === "de" ? "Ausschließlich für den Mailversand und -empfang erforderliche Meta-Daten." : "Metadata required strictly for message routing and processing."}
            </li>
            <li>
              <strong>{lang === "de" ? "Cookies & Local Storage:" : "Cookies & Local Storage:"}</strong> {lang === "de" ? "Nur technisch notwendige Session-Tokens – kein Werbe-Tracking!" : "Only strictly essential session tokens – no ad tracking!"}
            </li>
          </ol>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="lg:text-[28px] text-2xl font-bold text-default-950 mb-3">
            {lang === "de" ? "3. Deine Rechte" : "3. Your Rights"}
          </h2>
          <p className="mb-4">
            {lang === "de"
              ? "Du hast jederzeit das Recht auf kostenlose Auskunft über deine gespeicherten Daten, deren Herkunft und Empfänger sowie das Recht auf Berichtigung, Sperrung oder Löschung."
              : "You have the right to request access to, correction of, or deletion of your stored personal data at any time free of charge."}
          </p>
          <p>
            {lang === "de" ? "Wende dich hierzu einfach direkt an unser Admin-Team unter " : "Simply contact our admin team directly at "}
            <a href="mailto:info@fseda.org" className="text-primary font-medium hover:underline">info@fseda.org</a>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;