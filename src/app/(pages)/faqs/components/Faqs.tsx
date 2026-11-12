import { Icon } from "@iconify/react";
import { useState } from "react";

type FaqType = {
  id: string;
  question: { de: string; en: string };
  answer: { de: string; en: string };
};

const faqsData: FaqType[] = [
  {
    id: "faq-1",
    question: {
      de: "Wie schützt FSEDA meine Daten?",
      en: "How does FSEDA protect my data?",
    },
    answer: {
      de: "Datenschutz steht bei uns an erster Stelle. Alle Verbindungen werden end-to-end verschlüsselt, und unsere Server laufen unter strengen DSGVO-Richtlinien.",
      en: "Data security is our top priority. All connections are end-to-end encrypted and hosted under strict GDPR compliance.",
    },
  },
  {
    id: "faq-2",
    question: {
      de: "Wie erreiche ich den Support oder das FSEDA Team?",
      en: "How can I contact FSEDA support?",
    },
    answer: {
      de: "Du kannst uns jederzeit direkt per E-Mail unter info@fseda.org erreichen. Unser Team antwortet in der Regel innerhalb weniger Stunden.",
      en: "You can reach us directly via email at info@fseda.org. Our team usually responds within a few hours.",
    },
  },
  {
    id: "faq-3",
    question: {
      de: "Bietet FSEDA Dienstleistungen für Unternehmen & Entwickler an?",
      en: "Does FSEDA offer services for businesses & developers?",
    },
    answer: {
      de: "Ja, FSEDA bietet skalierbare Infrastruktur-Lösungen, API-Schnittstellen und dedizierte Entwicklungsumgebungen für moderne Web-Projekte.",
      en: "Yes, FSEDA provides scalable infrastructure solutions, APIs, and dedicated development environments for modern web applications.",
    },
  },
  {
    id: "faq-4",
    question: {
      de: "Welche Domains gehören zum FSEDA Ökosystem?",
      en: "Which domains belong to the FSEDA ecosystem?",
    },
    answer: {
      de: "Unser Kernnetzwerk umfasst fseda.org (Hauptplattform), fseda.online (Services) und fseda.eu (Europäischer Hub).",
      en: "Our core network consists of fseda.org (Main Platform), fseda.online (Services), and fseda.eu (European Hub).",
    },
  },
  {
    id: "faq-5",
    question: {
      de: "Ist der Beitritt zur FSEDA Community kostenlos?",
      en: "Is joining the FSEDA community free?",
    },
    answer: {
      de: "Ja, der Zugang zu unseren öffentlichen Ressourcen, Open-Source-Tools und Newslettern ist vollständig kostenlos.",
      en: "Yes, access to our public resources, open-source tools, and newsletters is completely free.",
    },
  },
];

interface FaqsProps {
  lang?: "de" | "en";
}

const Faqs = ({ lang = "de" }: FaqsProps) => {
  const [activeId, setActiveId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="relative size-full overflow-hidden pb-25 lg:pb-50">
      <div className="relative z-10 container max-w-245!">
        <div className="space-y-5 md:space-y-7.5">
          {faqsData.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-5 transition-all duration-300 ${
                  isOpen ? "border-primary/40 bg-default-100/50" : ""
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="text-default-900 hover:text-default-700 flex w-full items-center justify-between gap-2.5 text-start font-medium transition cursor-pointer"
                >
                  <h3 className="text-xl">{faq.question[lang]}</h3>
                  <Icon
                    icon="tabler:chevron-down"
                    className={`size-6 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="w-full text-start transition-all duration-300">
                    <p className="text-default-600 mt-5 leading-relaxed">
                      {faq.answer[lang]}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;