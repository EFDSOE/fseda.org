import sectionBg1 from "@/assets/images/bg/section-bg-1.png";
import { Icon } from "@iconify/react";

// Statt Porträtfotos einzelner Personen zeigt die Sektion die Organe und die
// Community. "icon" ersetzt deshalb das Feld "image" des Templates.
type TeamMemberType = {
  icon: string;
  name: string;
  role: string;
};

const teamMembersData: TeamMemberType[] = [
  {
    icon: "tabler:user-circle",
    name: "Vorstand",
    role: "Marian Andreas Lehnert",
  },
  {
    icon: "tabler:scale",
    name: "Stiftungsrat",
    role: "Aufsicht & Kontrolle",
  },
  {
    icon: "tabler:users",
    name: "Beirat",
    role: "Fachliche Beratung",
  },
  {
    icon: "tabler:brand-open-source",
    name: "Open-Source-Community",
    role: "Entwicklung & Prüfung",
  },
];

const Team = () => {
  return (
    <section className="relative size-full overflow-hidden py-20 md:py-25 lg:py-37.5">
      <img
        className="absolute inset-0 -z-1 size-full object-cover opacity-90"
        src={sectionBg1}
        alt=""
      />

      <div className="absolute inset-[-10%] bottom-auto -z-1 h-50 bg-white blur-2xl"></div>
      <div className="absolute inset-[-10%] top-auto -z-1 h-50 bg-white blur-2xl"></div>

      <div className="container">
        <div className="mb-7.5 text-center lg:mb-10">
          <h2 className="mb-2.5 text-4xl lg:text-[44px]">
            Struktur der Stiftung
          </h2>
          <p>
            Vorstand, Stiftungsrat und Beirat tragen die Stiftung – gemeinsam
            mit einer offenen Entwickler-Community.
          </p>
        </div>

        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {teamMembersData.map((member, idx) => (
            <div
              key={idx}
              className="from-default-100/20 rounded-2xl bg-linear-to-b to-transparent p-2.5"
            >
              <div className="rounded-2xl bg-linear-to-b from-white/70 to-transparent p-2.5">
                <div className="mb-4 flex aspect-square w-full items-center justify-center rounded-lg bg-white">
                  <Icon
                    icon={member.icon}
                    className="text-default-900 size-20"
                  />
                </div>

                <div className="px-4">
                  <h3 className="text-default-900 mb-1 text-xl">
                    {member.name}
                  </h3>
                  <div className="text-default-900 font-medium">
                    {member.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
