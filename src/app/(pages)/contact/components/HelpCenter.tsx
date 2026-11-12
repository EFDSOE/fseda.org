import { Icon } from "@iconify/react";

type SupportCardType = {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
  isExternal?: boolean;
};

const supportCardsData: SupportCardType[] = [
  {
    icon: "tabler:books",
    title: "Wissensdatenbank & OER",
    description:
      "Erfahren Sie mehr über offene Bildungsmaterialien, Lizenzen und die Anbindung von fseda.online.",
    linkText: "Dokumentation lesen",
    link: "https://fseda.online",
    isExternal: true,
  },
  {
    icon: "tabler:school",
    title: "Erprobung an Schulen",
    description:
      "Leitfäden und Best Practices für Schulträger und Lehrkräfte zur souveränen Nutzung.",
    linkText: "Schul-Guides ansehen",
    link: "#kontakt",
    isExternal: false,
  },
 {
    icon: "tabler:lock-check",
    title: "Geschlossene Telegram-Gruppe",
    description:
      "Exklusiver Austauschraum für verifizierte Dozenten und Studenten im Ökosystem.",
    linkText: "Zugang anfragen",
    link: "#kontakt", // Leitet direkt zum Kontaktformular weiter
    isExternal: false,
  },
];

const HelpCenter = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid gap-7.5 lg:grid-cols-3">
          {supportCardsData.map((card, idx) => (
            <div
              key={idx}
              className="border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-2.5"
            >
              <div className="rounded-xl bg-white p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-6">
                    <div className="border-default-200 from-default-100 inline-flex size-14 items-center justify-center rounded-xl border bg-linear-to-b to-transparent">
                      <Icon
                        icon={card.icon}
                        className="text-primary size-7"
                      />
                    </div>
                  </div>

                  <h3 className="text-default-950 mb-2 text-xl font-bold">
                    {card.title}
                  </h3>
                  <p className="mb-6 text-default-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {card.isExternal ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 group flex items-center gap-2 font-medium text-sm transition"
                  >
                    {card.linkText}
                    <Icon
                      icon="tabler:chevron-right"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                ) : (
                  <a
                    href={card.link}
                    className="text-primary hover:text-primary/80 group flex items-center gap-2 font-medium text-sm transition"
                  >
                    {card.linkText}
                    <Icon
                      icon="tabler:chevron-right"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;