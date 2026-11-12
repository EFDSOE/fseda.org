import sectionBg1 from "@/assets/images/bg/section-bg-1.png";

const Hero = () => {
  return (
    <>
      <section className="relative size-full overflow-hidden pt-32 pb-14 md:pt-37.5 lg:pt-50 lg:pb-20">
        <img
          className="absolute inset-0 -z-1 size-full object-cover opacity-90"
          src={sectionBg1}
          alt="Decoration"
        />
        <div className="absolute start-[-10%] end-[-10%] top-auto bottom-[-43%] -z-1 h-75 bg-white bg-[linear-gradient(180deg,transparent,#fff)] blur-2xl lg:bottom-[-39%]"></div>

        <div className="container">
          <div className="text-center">
            <h1 className="lg:w-[55%] w-full mx-auto mt-2.5 md:text-[64px] text-5xl leading-[1.2em] text-default-950 mb-2.5">
              Cloudkit blog
            </h1>
            <p className="mx-auto lg:w-1/2">
              Real stories of success and satisfaction from businesses using
              Cloudkit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
