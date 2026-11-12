import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="md:pb-25 lg:pb-37.5">
      <div className="container">
        <div className="border-default-100 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-2.5">
          <div className="border-default-200 rounded-2xl border bg-white bg-linear-to-b from-white to-transparent p-20">
            <div className="mb-7.5 text-center lg:mb-10">
              <h2 className="mb-2.5 text-4xl lg:text-[44px]">
                Gestalten Sie die Stiftung mit
              </h2>
              <p className="mx-auto mb-2.5 lg:w-1/2">
                Ob Erprobung an Ihrer Schule, Partnerschaft oder Zustiftung:
                Sprechen Sie mit uns über Ihren Weg der Beteiligung.
              </p>

              <div className="mx-auto mb-2.5 lg:w-1/2">
                <div className="flex justify-center gap-4">
                  <Link
                    to="/contact#kontakt"
                    className="group bg-primary inline-flex items-center justify-center gap-5 rounded-2xl px-9 py-3.5 font-medium text-white transition-all"
                  >
                    <span className="relative block overflow-hidden">
                      <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                        Beteiligung anfragen
                      </span>
                      <span className="absolute start-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                        Beteiligung anfragen
                      </span>
                    </span>
                  </Link>
                </div>
              </div>

              <p>Für Schulen · Partner · Stifterinnen und Stifter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
