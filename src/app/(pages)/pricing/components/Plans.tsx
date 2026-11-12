import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import pricingImg from "@/assets/images/other/pricing-hero.png"; // <-- Unser Foto Import

type PlanType = {
  icon: string;
  title: string;
  targetGroup: string;
  description: string;
  badge?: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isPopular?: boolean;
};

const plansData: PlanType[] = [
  {
    icon: "tabler:school",
    title: "Schulen & Lehrkräfte",
    targetGroup: "Für Klassenzimmer & Pädagogen",
    description: "Kostenfreier und unkomplizierter Zugang zu allen Kernfunktionen und Lehr-Lern-Materialien.",
    features: [
      "Kostenlose Nutzung von fseda.online",
      "Zugriff auf Freie Bildungsmaterialien (OER)",
      "Vollständig DSGVO-konform & werbefrei",
      "Community-Support & Anleitungen",
    ],
    ctaText: "Lernplattform öffnen",
    ctaLink: "https://fseda.online",
  },
  {
    icon: "tabler:building-bank",
    title: "Schulträger & Kommunen",
    targetGroup: "Empfohlen für Städte & Landkreise",
    description: "Souveräne Anbindung ganzer Schullandschaften mit dedizierter Betreuung und SLA.",
    badge: "Trägerschaft",
    isPopular: true,
    features: [
      "Zentrale Bereitstellung & LTI-Integration",
      "Infrastruktur-Hosting auf EU-Cloud-Knoten",
      "Persönlicher Ansprechpartner & Support",
      "Garantierte Datenhoheit ohne Vendor-Lock-in",
      "Mitgestaltung der regionalen Roadmap",
    ],
    ctaText: "Trägerschaft anfragen",
    ctaLink: "/contact",
  },
  {
    icon: "tabler:heart-handshake",
    title: "Förderer & Partner",
    targetGroup: "Für Stiftungen & Institutionen",
    description: "Nachhaltige Unterstützung des Stiftungsauftrags und strategische Partnerschaften.",
    features: [
      "Optionaler Sitz im Stiftungs-Beirat",
      "Gemeinsame Open-Source-Initiativen",
      "Transparente Verwendungsnachweise",
      "Förderung europäischer Bildungsstandards",
    ],
    ctaText: "Partner werden",
    ctaLink: "/contact",
  },
];

const Plans = () => {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="container">
        {/* Sektions-Überschrift */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl lg:text-[44px] mb-3">Unsere Beteiligungsmodelle</h2>
          <p className="text-default-600 max-w-2xl mx-auto">
            Digitale Bildung als öffentliches Gut: Transparent, gemeinnützig und getragen von einer starken Gemeinschaft.
          </p>
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        {/* Neues Action- & Partnerfoto als harmonischer Groß-Banner */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-default-200 shadow-md">
          <img
            src={pricingImg}
            alt="Gemeinschaftliche Trägerschaft und Kooperation"
            className="w-full h-auto max-h-[650px]  object-cover"
          />
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        {/* Die 3 Karten-Modelle */}
        <div className="grid gap-7.5 lg:grid-cols-3 items-stretch mb-16 lg:mb-20">
          {plansData.map((plan, idx) => (
            <div
              key={idx}
              className={`border-default-200 rounded-2xl border p-2.5 flex flex-col justify-between transition-all ${
                plan.isPopular
                  ? "bg-primary/5 border-primary shadow-sm"
                  : "bg-linear-to-b from-default-100 to-transparent"
              }`}
            >
              <div className="border-default-100 rounded-2xl border bg-white p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  {plan.badge && (
                    <div className="float-end">
                      <div className="inline-flex py-1 px-3 bg-primary text-white text-xs font-semibold rounded-full">
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="border-default-200 from-default-100 inline-flex size-14 items-center justify-center rounded-xl border bg-linear-to-b to-transparent">
                      <Icon
                        icon={plan.icon}
                        className="text-primary size-7"
                      />
                    </div>
                  </div>

                  <h3 className="mb-1 text-2xl font-bold text-default-950">{plan.title}</h3>
                  <p className="text-xs font-semibold text-primary mb-4 uppercase tracking-wider">
                    {plan.targetGroup}
                  </p>
                  <p className="mb-6 text-sm text-default-600 leading-relaxed">{plan.description}</p>

                  <div className="w-full h-px bg-default-100 mb-6" />

                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-sm text-default-700">
                        <Icon
                          icon="tabler:circle-check-filled"
                          className="text-primary size-5 shrink-0 mt-0.5"
                        />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {plan.ctaLink.startsWith("http") ? (
                    <a
                      href={plan.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex w-full items-center justify-center rounded-2xl px-6 py-3.5 font-medium transition-all text-center cursor-pointer ${
                        plan.isPopular
                          ? "bg-primary text-white hover:bg-primary/90"
                          : "bg-default-100 text-default-900 hover:bg-default-200"
                      }`}
                    >
                      {plan.ctaText}
                    </a>
                  ) : (
                    <Link
                      to={plan.ctaLink}
                      className={`inline-flex w-full items-center justify-center rounded-2xl px-6 py-3.5 font-medium transition-all text-center cursor-pointer ${
                        plan.isPopular
                          ? "bg-primary text-white hover:bg-primary/90"
                          : "bg-default-100 text-default-900 hover:bg-default-200"
                      }`}
                    >
                      {plan.ctaText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Plans;