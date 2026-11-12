import sectionBg1 from "@/assets/images/bg/section-bg-1.png";

const Hero = () => {
  return (
    <>
      <section className="relative size-full overflow-hidden lg:pt-50 lg:pb-20 md:pt-37.5 pt-32 pb-14">
        <img
          className="absolute inset-0 size-full opacity-90 object-cover -z-1"
          src={sectionBg1}
          alt="Decoration"
        />

        <div className="absolute -z-1 lg:bottom-[-39%] bottom-[-43%] end-[-10%] start-[-10%] top-auto bg-white h-75 bg-[linear-gradient(180deg,transparent,#fff)] blur-2xl"></div>

        <div className="container max-w-245!">
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-5 mb-2.5">
              <div className="py-1 px-2.5 rounded-full border border-default-200 bg-linear-to-b from-default-100 to-transparent">
                Cloud Storage
              </div>

              <p>Feb 13, 2025</p>
            </div>

            <h1 className="md:text-[64px] text-5xl leading-[1.2em] text-default-950 mb-2.5">
              Keeping cloud applications secure
            </h1>

            <p>
              The latest security measures to protect cloud-based SaaS
              solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
