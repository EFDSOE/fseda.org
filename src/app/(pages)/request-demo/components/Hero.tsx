import sectionBg1 from "@/assets/images/bg/section-bg-1.png";

const Hero = () => {
  return (
    <>
      <section className="relative size-full overflow-hidden lg:pt-50 pb-12.5 md:pt-37.5 pt-32">
        <img
          className="absolute inset-0 size-full opacity-90 object-cover -z-1"
          src={sectionBg1}
          alt="Decoration"
        />
        <div className="absolute -z-1 lg:bottom-[-39%] bottom-[-43%] end-[-10%] start-[-10%] top-auto bg-white h-75 bg-[linear-gradient(180deg,transparent,#fff)] blur-2xl"></div>

        <div className="container">
          <div className="text-center">
            <h1 className="md:text-[64px] text-5xl leading-[1.2em] text-default-950 mb-2.5">
              Request a demo
            </h1>
            <p className="md:w-3/5 mx-auto">
              See how our platform elevates your strategy. Request a demo to
              explore features that boost growth and engagement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
