import decorationBg from "@/assets/images/bg/decoration.svg";
import { Icon } from "@iconify/react";
import { Fragment } from "react";

type EcosystemLayerType = {
  icon: string;
  title: string;
  description: string;
};

// Die Kette ersetzt die zehn Fremdlogos des Templates.
const ecosystemData: EcosystemLayerType[] = [
  {
    icon: "tabler:building-bank",
    title: "Stiftung",
    description: "Träger & Governance",
  },
  {
    icon: "tabler:server",
    title: "Infrastruktur",
    description: "Souveräner Betrieb",
  },
  {
    icon: "tabler:school",
    title: "Lernplattform",
    description: "fseda.online",
  },
];

const Integrations = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-37.5">
      <div className="container lg:max-w-3/4!">
        <div className="border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-2.5">
          <div className="border-default-100 rounded-2xl border bg-white p-7.5 lg:px-20 lg:py-12.5">
            <div className="grid gap-10 lg:grid-cols-9 lg:gap-20">
              <div className="lg:col-span-4">
                <h2 className="mb-7.5 text-4xl lg:text-[44px]">
                  Das Ökosystem der Stiftung
                </h2>
                <p className="mb-7.5">
                  Von der Trägerin über den souveränen Betrieb bis zur
                  Lernplattform: drei Ebenen, die aufeinander aufbauen.
                </p>

                <a
                  href="https://fseda.online"
                  className="group bg-primary inline-flex items-center justify-center gap-5 rounded-xl px-6 py-2.5 font-medium text-white transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                      Lernplattform öffnen
                    </span>
                    <span className="absolute start-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                      Lernplattform öffnen
                    </span>
                  </span>
                </a>

                <div className="mt-25 grid grid-cols-2 gap-10 lg:gap-20">
                  <div>
                    <h3 className="mb-4 text-4xl">3</h3>
                    <p>Ebenen: Stiftung, Infrastruktur und Lernplattform</p>
                  </div>

                  <div>
                    <h3 className="mb-4 text-4xl">100 %</h3>
                    <p>
                      gemeinnützig – ohne Anteilseigner und ohne
                      Verwertungsinteresse.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-137.5 *:absolute">
                  <img
                    className="absolute inset-auto z-0 size-full object-cover"
                    src={decorationBg}
                    alt=""
                  />

                  <div className="inset-0 flex flex-col items-center justify-center gap-4">
                    {ecosystemData.map((layer, idx) => (
                      <Fragment key={idx}>
                        {idx > 0 && (
                          <Icon
                            icon="tabler:arrow-narrow-down"
                            className="text-default-900 size-8"
                            aria-hidden="true"
                          />
                        )}

                        <div className="border-default-100 flex w-full max-w-xs items-center gap-4 rounded-2xl border bg-white p-4">
                          <div className="border-default-200 from-default-100 inline-flex size-15 shrink-0 items-center justify-center rounded-xl border bg-linear-to-b to-transparent">
                            <Icon
                              icon={layer.icon}
                              className="text-default-900 size-8"
                            />
                          </div>

                          <div>
                            <h3 className="text-default-900 mb-1 text-xl">
                              {layer.title}
                            </h3>
                            <p className="text-sm">{layer.description}</p>
                          </div>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
