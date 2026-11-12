import { Icon } from "@iconify/react";

interface LegalDisclaimerProps {
  lang?: "de" | "en";
}

const LegalDisclaimer = ({ lang = "de" }: LegalDisclaimerProps) => {
  const sections = [
    {
      icon: "tabler:shield-check",
      title: lang === "de" ? "Haftung für Inhalte" : "Liability for Content",
      desc:
        lang === "de"
          ? "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen."
          : "As a service provider, we are responsible for our own content on these pages according to general laws. However, we are not obligated to monitor transmitted or stored third-party information.",
    },
    {
      icon: "tabler:link",
      title: lang === "de" ? "Haftung für Links" : "Liability for External Links",
      desc:
        lang === "de"
          ? "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."
          : "Our site contains links to external third-party websites over which we have no control. The respective provider or operator of the linked pages is always responsible for their content.",
    },
    {
      icon: "tabler:copyright",
      title: lang === "de" ? "Urheberrecht" : "Copyright Law",
      desc:
        lang === "de"
          ? "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung bedürfen der schriftlichen Zustimmung."
          : "The content and works created by the page operators on these pages are subject to German copyright law. Duplication, processing, and distribution require prior written consent.",
    },
    {
      icon: "tabler:gavel",
      title: lang === "de" ? "EU-Streitschlichtung" : "EU Dispute Resolution",
      desc:
        lang === "de"
          ? "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse findest du oben im Impressum."
          : "The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr. You can find our email address in the imprint above.",
    },
  ];

  return (
    <section className="relative size-full overflow-hidden md:pb-25 lg:pb-37.5">
      <div className="relative z-10 container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl lg:text-[40px] font-bold text-default-950">
            {lang === "de" ? "Rechtliche Hinweise & Haftung" : "Legal Disclaimers"}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-7.5">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="border-default-100 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-6 lg:p-8"
            >
              <div className="bg-default-900 mb-4 inline-flex items-center justify-center rounded-xl p-3 text-white">
                <Icon icon={sec.icon} className="size-6" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-default-950">
                {sec.title}
              </h3>
              <p className="text-default-600 leading-relaxed text-sm lg:text-base">
                {sec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;