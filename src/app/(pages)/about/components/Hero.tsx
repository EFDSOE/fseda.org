import sectionBg1 from "@/assets/images/bg/section-bg-1.png";

const Hero = () => {
  return (
    <section className="relative size-full overflow-hidden pt-32 md:pt-37.5 lg:pt-50">
      <img
        className="absolute inset-0 -z-1 size-full object-cover opacity-90"
        src={sectionBg1}
        alt=""
      />
      <div className="absolute start-[-10%] end-[-10%] top-auto bottom-[-43%] -z-1 h-75 bg-white bg-[linear-gradient(180deg,transparent,#fff)] blur-2xl lg:bottom-[-39%]"></div>

      <div className="container">
        <div className="mb-12.5 text-center">
          <h1 className="text-default-950 mx-auto mt-2.5 mb-5 w-full text-5xl leading-[1.2em] md:text-[64px] lg:w-[70%]">
            Unabhängig, souverän, quelloffen
          </h1>

          <p className="mx-auto font-medium lg:w-[53%]">
            Die{" "}
            <span className="text-default-900 font-bold">
              European Foundation for Digital Sovereignty and Open Education
              (EFDSOE)
            </span>{" "}
            ist eine Stiftung in Gründung mit Sitz in Graz. Sie setzt sich für
            digitale Souveränität und eine quelloffene Bildungsarchitektur in
            Europa ein – unabhängig von kommerziellen Interessen.
          </p>
        </div>
      </div>
      <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
    </section>
  );
};

export default Hero;
