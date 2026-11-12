import requestDemoImg from "@/assets/images/other/request-demo.png";

const RequestDemo = () => {
  return (
    <>
      <section className="lg:pb-37.5 md:pb-25 pb-20 relative z-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-7.5">
            <div>
              <img
                src={requestDemoImg}
                alt="Request Demo Image"
                className="rounded-2xl size-full"
              />
            </div>

            <div className="p-2.5 rounded-xl border border-default-200 bg-linear-to-b from-default-100 to-transparent">
              <div className="bg-white rounded-lg p-5">
                <div className="mb-5">
                  <label htmlFor="name" className="mb-1 font-medium block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="rounded-xl bg-linear-to-b from-default-100 to-transparent h-12.5 py-2 px-5 w-full flex items-center border border-default-200"
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="email" className="mb-1 font-medium block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="rounded-xl bg-linear-to-b from-default-100 to-transparent h-12.5 py-2 px-5 w-full flex items-center border border-default-200"
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="company" className="mb-1 font-medium block">
                    Your Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="rounded-xl bg-linear-to-b from-default-100 to-transparent h-12.5 py-2 px-5 w-full flex items-center border border-default-200"
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="position" className="mb-1 font-medium block">
                    Your Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    className="rounded-xl bg-linear-to-b from-default-100 to-transparent h-12.5 py-2 px-5 w-full flex items-center border border-default-200"
                  />
                </div>

                <button
                  type="submit"
                  className="group py-2.5 px-6 inline-flex items-center justify-center gap-5 rounded-xl bg-primary font-medium text-white transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                      Submit
                    </span>
                    <span className="absolute top-7 start-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                      Submit
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestDemo;
