import sectionBg1 from "@/assets/images/bg/section-bg-1.png";
import dashboard1 from "@/assets/images/home/dashboard-1.png";
import dashboard2 from "@/assets/images/home/dashboard-2.png";
import dashboard3 from "@/assets/images/home/dashboard-3.png";
import dashboard4 from "@/assets/images/home/dashboard-4.png";
import { Icon } from "@iconify/react";

// Ersetzt die Kundenlogo-Leiste des Templates: Die Stiftung hat keine "Kunden",
// deshalb laufen hier ihre Leitbegriffe durch.
const principlesData: string[] = [
  "Digitale Souveränität",
  "Open Source",
  "Offene Standards",
  "Datensouveränität",
  "Gemeinwohl",
  "DSGVO-konform",
  "Transparenz",
];

const Hero = () => {
  return (
    <section className="relative size-full overflow-hidden pt-32 md:pt-37.5 lg:pt-50">
      <img
        src={sectionBg1}
        alt=""
        className="absolute inset-0 -z-1 size-full object-cover opacity-90"
      />

      <div className="container">
        <div className="text-center">
          <div className="border-default-950/10 text-default-950 inline-flex items-center justify-center gap-2.5 rounded-xl border bg-[linear-gradient(#060f1608,#060f1608)] px-4 py-2 text-sm font-medium">
            <Icon
              icon="tabler:building-bank"
              className="size-4 rotate-15 text-yellow-400"
            />{" "}
            Stiftung in Gründung • Sitz Graz
          </div>

          <h1 className="text-default-950 mx-auto mt-2.5 mb-4 w-full text-3xl md:text-5xl lg:w-[85%] lg:text-6xl">
            Bildung braucht digitale Infrastruktur, über die sie selbst
            bestimmt.
          </h1>

          <p className="text-default-950 mx-auto mb-5 text-xl lg:w-[55%]">
            Wir verankern digitale Souveränität, Open Source und
            Datensouveränität nachhaltig im europäischen Bildungssystem.
          </p>

          <div className="inline-flex items-center gap-4 md:gap-20 lg:gap-7.5">
            <a
              href="#pricing"
              className="inline-flex rounded-2xl border border-white/20 bg-[linear-gradient(#fff3,#fff3)] p-1 backdrop-blur-sm"
            >
              <span className="group text-primary inline-flex items-center justify-center gap-5 rounded-xl bg-white px-9 py-3.5 font-medium transition-all">
                <span className="relative block overflow-hidden">
                  <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                    Beteiligung anfragen
                  </span>
                  <span className="absolute start-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                    Beteiligung anfragen
                  </span>
                </span>
              </span>
            </a>

            <a
              href="https://fseda.online"
              className="text-default-950 group flex items-center gap-2.5 font-medium"
            >
              Lernplattform fseda.online
              <Icon
                icon="tabler:chevron-right"
                className="size-5 transition-all duration-500 group-hover:translate-x-1.25"
              />
            </a>
          </div>
        </div>
      </div>

      {/* OFFEN: Die vier Bilder zeigen noch das Speicher-Dashboard des Templates.
          Dateien unter gleichem Namen ersetzen oder diesen Block entfernen. */}
      <div className="relative mx-auto hidden w-[80%] items-center lg:flex">
        <img
          src={dashboard1}
          alt=""
          className="inset-2.5 inline-block size-full"
        />
        <img
          src={dashboard2}
          alt=""
          className="absolute top-[8%] w-[80%] lg:start-[17%]"
        />
        <img
          src={dashboard3}
          alt=""
          className="absolute h-70 w-92.5 lg:start-[29.5%] lg:top-[19%]"
        />
        <img
          src={dashboard4}
          alt=""
          className="absolute h-70 w-92.5 lg:end-[20.5%] lg:top-[13%]"
        />
      </div>

      <div className="container py-5">
        <p className="text-default-950 mb-12.5 text-center text-xl font-medium">
          Wofür die Stiftung steht
        </p>

        <div className="relative flex w-full flex-nowrap gap-16 overflow-hidden">
          <div className="absolute inset-0 end-auto z-10 hidden w-25 bg-linear-to-tr from-white from-18% to-transparent lg:flex"></div>

          <div className="infinite-scroll-inverse inline-flex gap-16">
            {principlesData.map((principle, idx) => (
              <div key={idx} className="inline-flex max-w-full min-w-32">
                <span className="text-default-950 text-xl font-medium whitespace-nowrap">
                  {principle}
                </span>
              </div>
            ))}
          </div>

          <div
            className="infinite-scroll-inverse inline-flex gap-16"
            aria-hidden="true"
          >
            {principlesData.map((principle, idx) => (
              <div key={idx} className="inline-flex max-w-full min-w-32">
                <span className="text-default-950 text-xl font-medium whitespace-nowrap">
                  {principle}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 start-auto z-10 hidden w-25 bg-linear-to-l from-white from-18% to-transparent lg:flex"></div>
        </div>
      </div>

      <div className="absolute inset-x-[-10%] top-auto -z-1 h-125 bg-white blur-2xl lg:bottom-[-10%]"></div>
    </section>
  );
};

export default Hero;
