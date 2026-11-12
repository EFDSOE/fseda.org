import sectionBg1 from "@/assets/images/bg/section-bg-1.png";

const Hero = () => {
  return (
    <section className="relative size-full overflow-hidden lg:pt-50 lg:pb-25 md:pt-37.5 pt-32 pb-10">
      <img
        className="absolute inset-0 size-full opacity-90 object-cover -z-1"
        src={sectionBg1}
        alt=""
      />
      <div className="absolute -z-1 lg:bottom-[-39%] bottom-[-43%] end-[-10%] start-[-10%] top-auto bg-white h-75 bg-[linear-gradient(180deg,transparent,#fff)] blur-2xl"></div>

      <div className="container">
        <div className="text-center">
          <h1 className="md:text-[64px] text-5xl leading-[1.2em] text-default-950 mb-2.5">
            Kontakt
          </h1>

          <p>
            Sprechen Sie mit uns über Partnerschaften, Erprobungen an Schulen
            und Stiftergespräche.
          </p>
        </div>
      </div>
      <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        
    </section>
  );
};

export default Hero;
