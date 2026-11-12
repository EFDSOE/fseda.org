import { legalConfig } from "../../legalConfig";

export default function Impressum() {
  const isPre = legalConfig.inFoundationPhase;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 text-default-900 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Impressum</h1>
        <p className="text-sm text-default-500 mt-1">
          Angaben gemäß § 5 ECG, § 25 Mediengesetz und DSGVO
        </p>
      </div>

      {isPre && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs leading-relaxed">
          <strong>Hinweis zur Gründungsphase:</strong> Die Organisation "{legalConfig.brandName}" befindet sich derzeit in der Vorbereitung zur Errichtung einer gemeinnützigen Stiftung nach dem österreichischen Bundes-Stiftungs- und Fondsgesetz 2015 (BStFG 2015). Die Dienste und Datenverarbeitungen dieser Website werden vorläufig von der unten angegebenen verantwortlichen Person betrieben.
        </div>
      )}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold border-b border-default-200 pb-2">
          {isPre ? "Dienstanbieter & Verantwortlicher (in Gründungsphase)" : "Stiftungsangaben"}
        </h2>
        
        {isPre ? (
          <div className="text-sm space-y-1">
            <p className="font-bold">{legalConfig.brandName} – European Foundation for Data Sovereignty & Open Ecosystems (in Gründung)</p>
            <p>Vertreten durch: {legalConfig.responsiblePersonPreFoundation.name}</p>
            <p>Anschrift: {legalConfig.responsiblePersonPreFoundation.address}</p>
            <p>E-Mail: {legalConfig.responsiblePersonPreFoundation.email}</p>
          </div>
        ) : (
          <div className="text-sm space-y-1">
            <p className="font-bold">{legalConfig.foundationPostEntry.registeredName}</p>
            <p>Rechtsform: {legalConfig.legalForm}</p>
            <p>Stiftungsregister: {legalConfig.foundationPostEntry.registryNumber}</p>
            <p>Anschrift: {legalConfig.foundationPostEntry.address}</p>
            <p>Vertretungsberechtigte Organe: {legalConfig.foundationPostEntry.boardMembers.join(", ")}</p>
            <p>E-Mail: {legalConfig.foundationPostEntry.email}</p>
          </div>
        )}
      </section>

      <section className="space-y-4 text-sm leading-relaxed">
        <h2 className="text-xl font-semibold border-b border-default-200 pb-2">Organisationszweck & Ausrichtung</h2>
        <p>
          Die EFDSOE verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne der §§ 34 ff. BAO sowie des BStFG 2015. Der Zweck umfasst die Förderung von Wissenschaft, Forschung, Bildung, digitalen Grundrechten, Datenschutz und europäischer digitaler Souveränität.
        </p>
        <p><strong>Technischer Infrastrukturstandort:</strong> {legalConfig.infrastructureLocation}</p>
      </section>
    </div>
  );
}