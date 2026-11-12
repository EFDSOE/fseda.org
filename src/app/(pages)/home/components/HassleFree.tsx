import { Icon } from "@iconify/react";

type StepType = {
  icon: string;
  title: string;
  description: string;
};

const stepsData: StepType[] = [
  {
    icon: "tabler:scale",
    title: "Rechtsform",
    description: "Stiftung in Gründung nach österreichischem Stiftungsrecht.",
  },
  {
    icon: "tabler:map-pin",
    title: "Sitz",
    description: "Graz, Steiermark, Österreich.",
  },
  {
    icon: "tabler:building-bank",
    title: "Aufsichtsbehörde",
    description: "Amt der Steiermärkischen Landesregierung.",
  },
];

const HassleFree = () => {
  return (
    <section id="governance" className="scroll-mt-28">
      <div className="container max-w-245!">
        <div className="mb-5 gap-4 text-center md:mb-7.5 lg:mb-12.5">
          <h2 className="text-4xl lg:text-[44px]">
            Governance &amp; Transparenz
          </h2>
        </div>

        <div className="grid gap-7.5 md:gap-10 lg:grid-cols-3 lg:gap-25">
          {stepsData.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-7.5">
                <div className="border-default-200 from-default-100 inline-flex size-15 items-center justify-center rounded-xl border bg-linear-to-b to-transparent">
                  <Icon icon={step.icon} className="text-default-900 size-8" />
                </div>
              </div>

              <h3 className="text-default-900 mb-2 text-xl">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 md:mt-12.5 lg:mt-20 lg:w-[53%]">
          <div className="grid grid-cols-2 gap-7.5">
            <div className="flex items-start gap-5">
              <Icon
                icon="tabler:hourglass"
                className="text-default-900 size-14 shrink-0"
              />

              <div>
                <div className="from-default-100 border-default-950/10 text-default-950 inline-flex items-center justify-center gap-2.5 rounded-md border bg-linear-to-b to-transparent px-2.5 py-1.25 text-sm/4 font-medium">
                  <Icon
                    icon="tabler:clock"
                    className="size-3.5 text-yellow-400"
                  />{" "}
                  In Gründung
                </div>
                <p className="mt-1.5 text-sm">Rechtlicher Status</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <Icon
                icon="tabler:user-circle"
                className="text-default-900 size-14 shrink-0"
              />

              <div>
                <div className="from-default-100 border-default-950/10 text-default-950 inline-flex items-center justify-center gap-2.5 rounded-md border bg-linear-to-b to-transparent px-2.5 py-1.25 text-sm/4 font-medium">
                  <Icon
                    icon="tabler:user-check"
                    className="size-3.5 text-yellow-400"
                  />{" "}
                  Marian Andreas Lehnert
                </div>
                <p className="mt-1.5 text-sm">Vorstand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HassleFree;
