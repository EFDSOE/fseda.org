import sectionBg1 from "@/assets/images/bg/section-bg-1.png";

const Hero = () => {
  return (
    <section className="relative size-full overflow-hidden pt-32 pb-16 md:pt-37.5 md:pb-24 lg:pt-50 lg:pb-32">
      {/* Hintergrundbild Himmel */}
      <img
        className="absolute inset-0 -z-1 size-full object-cover opacity-90 min-h-[500px]"
        src={sectionBg1}
        alt="Decoration"
      />
      
      {/* Soft White Transition nach unten */}
      <div className="absolute start-[-10%] end-[-10%] top-auto bottom-[-60%] -z-1 h-96 bg-white bg-[linear-gradient(180deg,transparent,#fff)] blur-2xl lg:bottom-[-50%]"></div>

      <div className="container relative z-10">
        <div className="text-center">
          <h1 className="text-default-950 mx-auto mt-2.5 mb-4 w-full text-5xl leading-[1.2em] md:mb-8 md:text-[64px] lg:mb-12.5 lg:w-[75%]">
            Beteiligung & Trägerschaft
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-default-600 md:text-base">
            <div>100% Gemeinnützig</div>
            <div className="bg-default-950 size-1 rounded-2xl"></div>
            <div>Kein Commercial Lock-in</div>
            <div className="bg-default-950 size-1 rounded-2xl"></div>
            <div>Digitale Souveränität</div>
          </div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;