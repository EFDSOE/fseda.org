import { useState } from "react";
import { Icon } from "@iconify/react";

type FaqType = {
  id: string;
  question: string;
  answer: string;
};

const faqsData: FaqType[] = [
  {
    id: "faq-1",
    question: "Was bedeutet 'Digitale Souveränität' für Bildungseinrichtungen?",
    answer:
      "Bildungseinrichtungen behalten die vollständige Kontrolle über ihre Daten, die eingesetzte Software und die digitalen Lerninhalte – ohne von einzelnen Großkonzernen abhängig zu sein.",
  },
  {
    id: "faq-2",
    question: "Wie ist die Lernplattform fseda.online angebunden?",
    answer:
      "fseda.online bildet die oberste Anwendungsebene unseres Ökosystems. Sie greift direkt auf die souveräne Infrastruktur der Stiftung zu und garantiert barrierefreie Lernumgebungen.",
  },
  {
    id: "faq-3",
    question: "Ist das Ökosystem für Schulen kostenfrei nutzbar?",
    answer:
      "Ja, als Stiftung stehen die Kernfunktionen und offenen Schnittstellen gemeinnützig zur Verfügung. Partner und Schulträger unterstützen das System über faire Beteiligungsmodelle.",
  },
  {
    id: "faq-4",
    question: "Wie wird der Datenschutz (DSGVO) garantiert?",
    answer:
      "Sämtliche Daten verbleiben auf europäischen Servern. Es erfolgt kein Tracking zu kommerziellen Zwecken und keine Weitergabe von Schülerdaten an Dritte.",
  },
];

const Faqs = () => {
  // Erster FAQ-Eintrag ist standardmäßig offen
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative size-full overflow-hidden pb-10 md:pb-2.5 lg:pb-37.5">
      <div className="relative z-10 container">
        <div className="mb-12 text-center">
          <h2 className="text-4xl lg:text-[44px]">Häufige Fragen zum Ökosystem</h2>
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