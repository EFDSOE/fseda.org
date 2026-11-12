import { Icon } from "@iconify/react";

interface LegalDetailsProps {
  lang?: "de" | "en";
}

const LegalDetails = ({ lang = "de" }: LegalDetailsProps) => {
  const domains = [
    { name: "fseda.org", role: lang === "de" ? "Hauptnetzwerk & Core Platform" : "Main Network & Core Platform" },
    { name: "fseda.online", role: lang === "de" ? "Services & API Gateway" : "Services & API Gateway" },
    { name: "fseda.eu", role: lang === "de" ? "Europäischer Server-Hub" : "European Infrastructure Hub" },
  ];

  return (
    <section className="relative overflow-hidden md:pb-12 lg:pb-20">
      <div className="container">
        {/* Domain Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-10">
          {domains.map((domain, idx) => (
            <div key={idx} className="border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-5 text-center">
              <div className="bg-primary/10 text-primary inline-flex p-3 rounded-xl mb-3">
                <Icon icon="tabler:world" className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-default-950 mb-1">{domain.name}</h3>
              <p className="text-default-600 text-sm">{domain.role}</p>
            </div>
          ))}
        </div>

        {/* Company Info Box */}
        <div className="border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-8 md:p-12">
          <h2 className="text-2xl lg:text-[32px] font-bold text-default-950 mb-6">
            {lang === "de" ? "Angaben gemäß § 5 DDG" : "Information according to Section 5 DDG"}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-default-700 leading-relaxed">
            <div>
              <h4 className="font-bold text-default-950 mb-2 text-lg">
                {lang === "de" ? "Diensteanbieter & Vertretung" : "Service Provider & Representation"}
              </h4>
              <p className="font-semibold text-default-900">FSEDA Network Platform</p>
              <p>Vertreten durch das FSEDA Admin & Engineering Board</p>
              <p className="mt-2 text-default-600">Deutschland / EU</p>
            </div>

            <div>
              <h4 className="font-bold text-default-950 mb-2 text-lg">
                {lang === "de" ? "Kontakt & Kommunikation" : "Contact & Support"}
              </h4>
              <p className="flex items-center gap-2">
                <Icon icon="tabler:mail" className="text-primary size-5" />
                <span>E-Mail:</span>
                <a href="mailto:info@fseda.org" className="text-primary font-medium hover:underline">
                  info@fseda.org
                </a>
              </p>
              <p className="flex items-center gap-2 mt-2">
                <Icon icon="tabler:brand-telegram" className="text-primary size-5" />
                <span>{lang === "de" ? "Support-Response:" : "Support Response:"}</span>
                <span className="text-default-600">&lt; 24h</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDetails;