import footerBg from "@/assets/images/bg/footer-bg.png";
import dashboard5 from "@/assets/images/home/dashboard-5.png";
import dashboard6 from "@/assets/images/home/dashboard-6.png";
import dashboard7 from "@/assets/images/home/dashboard-7.png";
import dashboard8 from "@/assets/images/home/dashboard-8.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

type FeatureType = {
  icon: string;
  title: string;
  description: string;
};

const featuresData: FeatureType[] = [
  {
    icon: "tabler:heart-handshake",
    title: "100 % gemeinnützig",
    description:
      "Die Stiftung verfolgt gemeinnützige Zwecke – ohne Anteilseigner und ohne Gewinnabsicht.",
  },
  {
    icon: "tabler:brand-open-source",
    title: "Quelloffen",
    description:
      "Software und Standards sind offen einsehbar, überprüfbar und weiterverwendbar.",
  },
  {
    icon: "tabler:shield-check",
    title: "DSGVO-konform",
    description:
      "Bildungsdaten werden nach europäischem Datenschutzrecht verarbeitet.",
  },
  {
    icon: "tabler:eye-check",
    title: "Transparent",
    description:
      "Rechtsform, Sitz, Aufsicht und Vorstand sind offen ausgewiesen.",
  },
];

const Potential = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-25 lg:py-37.5">
      <img
        className="absolute inset-0 -z-1 size-full object-cover opacity-50"
        src={footerBg}
        alt=""
      />
      <div className="absolute -inset-x-1/10 -top-1/4 bottom-auto -z-1 h-125 bg-white blur-2xl"></div>
      <div className="absolute -inset-x-1/10 top-auto -bottom-1/4 -z-1 h-125 bg-white blur-2xl"></div>

      <div className="container">
        <div className="mb-7.5 text-center lg:mb-10">
          <h2 className="mb-7.5 text-4xl lg:text-[44px]">
            Prinzipien der Stiftung
          </h2>
          <p className="mx-auto mb-7.5 lg:w-[42%]">
            Gemeinnützig, quelloffen und DSGVO-konform: Diese Grundsätze gelten
            für die Stiftung, ihre Infrastruktur und die Lernplattform.
          </p>
        </div>

        {/* OFFEN: Die vier Bilder zeigen noch das Speicher-Dashboard des Templates.
            Dateien unter gleichem Namen ersetzen oder diesen Block entfernen. */}
        <div className="relative z-1">
          <img src={dashboard5} alt="" className="size-full rounded-2xl" />
          <img
            src={dashboard6}
            alt=""
            className="absolute inset-auto start-[21%] top-[32%] hidden h-31.5 w-50 rounded-lg shadow-[20px_20px_80px_#00000026] lg:flex"
          />
          <img
            src={dashboard7}
            alt=""
            className="absolute inset-auto start-[41%] top-[49.5%] hidden h-31.5 w-50 rounded-lg shadow-[20px_20px_80px_#00000026] lg:flex"
          />
          <img
            src={dashboard8}
            alt=""
            className="absolute inset-auto end-[23%] top-[32%] hidden h-47.5 w-50 rounded-lg shadow-[20px_20px_80px_#00000026] lg:flex"
          />
        </div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div className="mb-20 text-center">
          <div className="border-default-950/10 text-default-950 inline-flex items-center justify-center gap-2.5 rounded-xl border bg-[linear-gradient(#060f1608,#060f1608)] px-4 py-2 text-sm font-medium">
            Fragen zur Governance?
            <Link
              to="/contact"
              className="text-default-950 group flex items-center gap-2.5 font-medium underline"
            >
              Kontakt aufnehmen
              <Icon
                icon="tabler:arrow-narrow-right"
                className="size-5 transition-all duration-500 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7.5">
          {featuresData.map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-5">
                <Icon
                  icon={feature.icon}
                  className="text-default-900 mx-auto size-9"
                />
              </div>
              <h3 className="mb-2 text-xl">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Potential;
