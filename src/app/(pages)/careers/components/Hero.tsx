import sectionBg1 from "@/assets/images/bg/section-bg-1.png";

interface HeroProps {
  lang?: "de" | "en";
}

const Hero = ({ lang = "de" }: HeroProps) => {
  return (
    <section className="relative size-full overflow-hidden pt-32 pb-10 md:pt-37.5 lg:pt-50 lg:pb-12.5">
      <img
        className="absolute inset-0 z-1 size-full object-cover opacity-90"
        src={sectionBg1}
        alt="Decoration"
      />
      <div className="absolute -inset-x-4 top-auto bottom-[-4%] z-2 h-75 bg-white bg-[linear-gradient(180deg,#0000,var(--color-white))] blur-2xl lg:bottom-[-19%]"></div>

      <div className="relative z-10 container">
        <div className="text-center">
          <h1 className="text-default-950 mx-auto mt-2.5 mb-5 w-full text-5xl leading-[1.2em] md:text-[64px] font-bold lg:w-[75%]">
            {lang === "de" ? "Impressum & Anbieterkennzeichnung" : "Legal Notice & Imprint"}
          </h1>
          <p className="mx-auto mb-4 text-default-600 lg:w-1/2 text-lg">
            {lang === "de"
              ? "Rechtliche Informationen und Angaben gemäß § 5 DDG für das FSEDA Ökosystem."
              : "Legal information and company details according to German telemedia regulations for the FSEDA ecosystem."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;