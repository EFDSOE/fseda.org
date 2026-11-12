import { Icon } from "@iconify/react";

type BenefitType = {
  icon: string;
  title: string;
  description: string;
};

const benefitsData: BenefitType[] = [
  {
    icon: "tabler:shield-lock",
    title: "Höchste Datensicherheit",
    description: "Vollständig DSGVO-konforme Datenverarbeitung auf europäischen Rechenzentren.",
  },
  {
    icon: "tabler:code",
    title: "100% Open Source",
    description: "Der Quellcode ist einsehbar, auditierbar und frei von proprietären Silos.",
  },
  {
    icon: "tabler:puzzle",
    title: "Modulare Schnittstellen",
    description: "Einfache LTI- und API-Integration in bestehende Schul- und Landesportale.",
  },
  {
    icon: "tabler:books",
    title: "Freie Bildungsinhalte (OER)",
    description: "Zugang zu qualitativ hochwertigen, lizenzfreien Lehr- und Lernmaterialien.",
  },
  {
    icon: "tabler:device-laptop",
    title: "Plattformunabhängig",
    description: "Optimiert für alle Endgeräte – vom Tablet im Klassenzimmer bis zum Desktop im Büro.",
  },
  {
    icon: "tabler:users-group",
    title: "Community-Driven",
    description: "Weiterentwicklung durch eine offene Allianz aus Pädagogen, Entwicklern und Trägern.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-25 lg:py-37.5">
      <div className="container">
        <div className="mb-5 gap-4 text-center md:mb-7.5 lg:mb-12.5">
          <h2 className="text-4xl lg:text-[44px]">
            Mehrwerte des Bildungsökosystems
          </h2>
          <p className="text-default-600 mt-2">Warum digitale Souveränität in der Bildung der Schlüssel ist.</p>
        </div>

        <div className="grid gap-7.5 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12">
          {benefitsData.map((benefit, idx) => (
            <div key={idx} className="p-4 border border-default-200 rounded-2xl bg-default-50/50">
              <div className="mb-5">
                <div className="border-default-200 from-default-100 inline-flex size-15 items-center justify-center rounded-xl border bg-linear-to-b to-transparent">
                  <Icon
                    icon={benefit.icon}
                    className="text-default-900 size-9"
                  />
                </div>
              </div>

              <h3 className="text-default-900 mb-2 text-xl font-medium">{benefit.title}</h3>
              <p className="text-default-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;