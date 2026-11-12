import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

// Aus den Preisplänen des Templates wurden Beteiligungswege. Preisfelder,
// Monats-/Jahres-Umschalter und Preiszähler sind entfallen, dafür trägt jeder
// Weg seine eigene Schaltflächen-Beschriftung (cta).
type PricingPlanType = {
  icon: string;
  title: string;
  description: string;
  cta: string;
  features: string[];
  isPopular?: boolean;
  hasItemClass?: boolean;
};

const pricingPlansData: PricingPlanType[] = [
  {
    icon: "tabler:affiliate",
    title: "Partnerschaften",
    description:
      "Für Organisationen und Open-Source-Initiativen, die Software, Betrieb oder Expertise einbringen.",
    cta: "Partnerschaft anfragen",
    features: [
      "Open-Source-Initiativen und Projekte",
      "Bildungs- und Forschungseinrichtungen",
      "Infrastruktur- und Betriebspartner",
      "Gemeinsame Arbeit an offenen Modulen",
      "Austausch zu Standards und Interoperabilität",
    ],
    hasItemClass: false,
  },
  {
    icon: "tabler:school",
    title: "Erprobung für Schulen",
    description:
      "Für Schulen und Bildungseinrichtungen, die Lernplattform und Infrastruktur in der Praxis erproben.",
    cta: "Erprobung anfragen",
    features: [
      "Pilotprojekte im Unterricht",
      "Infrastruktur-Tests im Schulbetrieb",
      "Arbeit mit der Lernplattform fseda.online",
      "Rückmeldung aus der Praxis",
      "Direkter Austausch mit der Stiftung",
    ],
    hasItemClass: true,
  },
  {
    icon: "tabler:building-bank",
    title: "Stifterinnen & Stifter",
    description:
      "Für Privatpersonen, Unternehmen und Institutionen, die die Stiftung langfristig tragen.",
    cta: "Stiftergespräch anfragen",
    features: [
      "Zustiftungen zum Stiftungsvermögen",
      "Strategische Förderung",
      "Für Privatpersonen und Unternehmen",
      "Für Institutionen und Förderer",
      "Persönliches Gespräch mit dem Vorstand",
    ],
    hasItemClass: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative scroll-mt-28 overflow-hidden">
      <div className="container">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row lg:mb-12.5 lg:gap-7.5">
          <h2 className="text-4xl lg:text-[44px]">Wege der Beteiligung</h2>

          <div className="flex">
            <div className="border-default-950/10 text-default-950 inline-flex items-center justify-center gap-2.5 rounded-xl border bg-[linear-gradient(#060f1608,#060f1608)] px-4 py-2 text-sm font-medium">
              <Icon icon="tabler:clock" className="size-4 text-yellow-400" />{" "}
              Stiftung in Gründung
            </div>
          </div>
        </div>

        <div className="grid gap-7.5 lg:grid-cols-3">
          {pricingPlansData.map((plan, idx) => (
            <div
              key={idx}
              className="border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-2.5"
            >
              <div className="border-default-100 rounded-2xl border bg-white p-4 lg:p-5">
                {plan.isPopular && (
                  <div className="float-end">
                    <div className="bg-default-950 inline-flex rounded-full px-2.5 py-1 text-white">
                      Schwerpunkt
                    </div>
                  </div>
                )}

                <div className="mb-7.5">
                  <div className="border-default-200 from-default-100 inline-flex size-15 items-center justify-center rounded-xl border bg-linear-to-b to-transparent">
                    <Icon
                      icon={plan.icon}
                      className="text-default-900 size-8"
                    />
                  </div>
                </div>

                <h3 className="mb-4 text-xl">{plan.title}</h3>
                <p className="mb-7.5">{plan.description}</p>

                <Link
                  to="/contact"
                  className="group bg-primary inline-flex w-full items-center justify-center gap-5 rounded-2xl px-6 py-3.5 font-medium text-white transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                      {plan.cta}
                    </span>
                    <span className="absolute start-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                      {plan.cta}
                    </span>
                  </span>
                </Link>
              </div>

              <div className="p-5">
                <div className="space-y-2.5 *:flex *:items-center *:gap-2.5">
                  {plan.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className={
                        plan.hasItemClass ? "pricing-list-item" : undefined
                      }
                    >
                      <Icon
                        icon="tabler:rosette-discount-check-filled"
                        className="text-default-900 size-5"
                      />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
