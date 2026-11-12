import { Icon } from "@iconify/react";

type PillarType = {
  icon: string;
  title: string;
  description: string;
};

const pillarsData: PillarType[] = [
  {
    icon: "tabler:eye-check",
    title: "Transparenz",
    description:
      "Rechtsform, Sitz, Aufsicht und Organe der Stiftung sind offen ausgewiesen.",
  },
  {
    icon: "tabler:shield-lock",
    title: "Datenschutz & DSGVO",
    description:
      "Bildungsdaten werden nach europäischem Datenschutzrecht verarbeitet.",
  },
  {
    icon: "tabler:building-community",
    title: "Nachhaltige Trägerschaft",
    description:
      "Eine Stiftung hat keine Anteilseigner. Eine kommerzielle Übernahme ist damit ausgeschlossen.",
  },
];

// Ersetzt auf der About-Seite die Markenlogo-Leiste (Brands) des Templates.
// Kartenaufbau und Klassen stammen aus home/components/PowerfulFeatures.tsx.
const GovernancePillars = () => {
  return (
    <section id="governance" className="scroll-mt-28 pt-20 md:pt-25 lg:pt-37.5">
      <div className="container">
        <div className="mb-7.5 text-center lg:mb-10">
          <h2 className="mb-2.5 text-4xl lg:text-[44px]">
            Säulen der Governance
          </h2>
          <p>Worauf die Stiftung dauerhaft verpflichtet ist.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-7.5">
          {pillarsData.map((pillar, idx) => (
            <div
              key={idx}
              className="border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-2.5"
            >
              <div className="border-default-100 rounded-2xl border bg-white px-15 py-10">
                <Icon
                  icon={pillar.icon}
                  className="text-default-900 mx-auto size-20"
                />
              </div>

              <div className="p-7.5">
                <h3 className="mb-6 text-xl">{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernancePillars;
