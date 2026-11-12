import { useState } from "react";
import { Icon } from "@iconify/react";

type FaqType = {
  id: string;
  question: string;
  answer: string;
};

const faqsData: FaqType[] = [
  {
    id: "pricing-faq-1",
    question: "Ist die Nutzung für einzelne Schulen wirklich kostenlos?",
    answer:
      "Ja! Die Grundinfrastruktur und die Lernplattform fseda.online stehen allen öffentlichen Schulen, Lehrkräften und Schülerinnen und Schülern kostenfrei zur Verfügung.",
  },
  {
    id: "pricing-faq-2",
    question: "Wie finanziert sich die EFDSOE Stiftung?",
    answer:
      "Die Finanzierung erfolgt über gemeinnützige Zuwendungen, öffentliche Fördergelder sowie Partnerschaftsbeiträge von Schulträgern für maßgeschneiderte Systemanbindungen.",
  },
  {
    id: "pricing-faq-3",
    question: "Gibt es versteckte Kosten oder Abo-Modelle?",
    answer:
      "Nein. Als gemeinnützige Stiftung ohne Gewinnabsicht garantieren wir volle Transparenz. Es gibt keine versteckten Gebühren oder kommerzielles Up-Selling.",
  },
  {
    id: "pricing-faq-4",
    question: "Wie kann ein Schulträger offizieller Partner werden?",
    answer:
      "Nehmen Sie direkt über unser Kontaktformular Verbindung auf. Wir besprechen Ihre Anforderungen und erstellen ein individuelles Integrationskonzept.",
  },
];

const Faqs = () => {
  const [openId, setOpenId] = useState<string | null>("pricing-faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative size-full overflow-hidden pb-10 md:pb-2.5 lg:pb-37.5">
      <div className="relative z-10 container">
        <div className="mb-12 text-center">
          <h2 className="text-4xl lg:text-[44px]">Fragen zur Trägerschaft & Beteiligung</h2>
        </div>

        <div className="mx-auto lg:w-200">
          <div className="space-y-5 md:space-y-7.5">
            {faqsData.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-5"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="text-default-900 hover:text-default-700 flex w-full items-center justify-between gap-2.5 text-start font-medium transition cursor-pointer"
                  >
                    <h3 className="text-xl">{faq.question}</h3>
                    <Icon
                      icon="tabler:chevron-down"
                      className={`size-6 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="w-full overflow-hidden text-start">
                      <p className="text-default-600 mt-5">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;