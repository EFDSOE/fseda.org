import { Icon } from "@iconify/react";

const PowerfulFeatures = () => {
  return (
    <section className="py-20 md:py-25 lg:py-37.5">
      <div className="container">
        <div className="mb-8 flex items-center justify-between gap-4 lg:mb-12.5 lg:gap-7.5">
          <h2 className="text-4xl lg:text-[44px]">Drei Grundpfeiler</h2>

          <a
            href="#governance"
            className="group bg-primary inline-flex items-center justify-center gap-5 rounded-xl px-6 py-2.5 font-medium text-white transition-all"
          >
            <span className="relative block overflow-hidden">
              <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                Zur Governance
              </span>
              <span className="absolute start-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                Zur Governance
              </span>
            </span>
          </a>
        </div>

        <div className="mb-4 grid gap-4 md:grid-cols-3 lg:gap-7.5">
          <div className="border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-2.5">
            <div className="border-default-100 rounded-2xl border bg-white px-15 py-10">
              <Icon
                icon="tabler:shield-lock"
                className="text-default-900 mx-auto size-20"
              />
            </div>

            <div className="p-7.5">
              <h3 className="mb-6 text-xl">Digitale Souveränität</h3>
              <p>
                Unabhängigkeit von proprietären Monopolen und Schutz
                europäischer Bildungsdaten.
              </p>
            </div>
          </div>

          <div className="border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-2.5">
            <div className="border-default-100 rounded-2xl border bg-white px-15 py-10">
              <Icon
                icon="tabler:brand-open-source"
                className="text-default-900 mx-auto size-20"
              />
            </div>

            <div className="p-7.5">
              <h3 className="mb-6 text-xl">Open Source &amp; Standards</h3>
              <p>
                Quelloffene Module, Interoperabilität und transparente
                Auditierbarkeit.
              </p>
            </div>
          </div>

          <div className="border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-2.5">
            <div className="border-default-100 rounded-2xl border bg-white px-15 py-10">
              <Icon
                icon="tabler:heart-handshake"
                className="text-default-900 mx-auto size-20"
              />
            </div>

            <div className="p-7.5">
              <h3 className="mb-6 text-xl">Gemeinwohlorientierung</h3>
              <p>
                Bildung als öffentliches Gut – nachhaltig finanziert und
                rechtssicher.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
