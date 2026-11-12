import sectionBg1 from "@/assets/images/bg/section-bg-1.png";

const Hero = () => {
  return (
    <section className="relative size-full overflow-hidden pt-32 pb-10 md:pt-37.5 lg:pt-50 lg:pb-17.5">
      <img
        className="absolute inset-0 -z-1 size-full object-cover opacity-90"
        src={sectionBg1}
        alt="Decoration"
      />
      <div className="absolute start-[-10%] end-[-10%] top-auto bottom-[-43%] -z-1 h-75 bg-white bg-[linear-gradient(180deg,transparent,#fff)] blur-2xl lg:bottom-[-39%]"></div>

      <div className="container">
        <div className="text-center">
          <h1 className="text-default-950 mx-auto mt-2.5 mb-4 w-full text-5xl leading-[1.2em] md:mb-8 md:text-[64px] lg:mb-12.5 lg:w-[70%]">
            Das digitale Bildungsökosystem
          </h1>
          <p className="mx-auto mb-8 text-lg text-default-600 lg:w-[60%]">
            Von der Trägerin über den souveränen Betrieb bis zur Lernplattform: Eine modulare Bildungsarchitektur auf drei starken Ebenen.
          </p>

          <a
            href="https://fseda.online"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-primary inline-flex items-center justify-center gap-5 rounded-xl px-9 py-3.5 font-medium text-white transition-all"
          >
            <span className="relative block overflow-hidden">
              <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                Lernplattform fseda.online
              </span>
              <span className="absolute start-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                Lernplattform fseda.online
              </span>
            </span>
          </a>
        </div>
      </div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </section>
  );
};

export default Hero;
