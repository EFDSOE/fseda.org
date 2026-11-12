import { Icon } from "@iconify/react";

interface CtaProps {
  lang?: "de" | "en";
}

const Cta = ({ lang = "de" }: CtaProps) => {
  return (
    <section className="md:pb-25 lg:pb-37.5">
      <div className="container">
        <div className="border-default-100 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-2.5">
          <div className="border-default-200 rounded-2xl border bg-white bg-linear-to-b from-white to-transparent p-10 md:p-16 text-center">
            <h2 className="mb-3 text-3xl md:text-4xl lg:text-[44px] font-bold text-default-950">
              {lang === "de" ? "Fragen zum Impressum oder Rechtlichem?" : "Questions Regarding Legal Notices?"}
            </h2>
            <p className="mx-auto mb-8 lg:w-1/2 text-default-600">
              {lang === "de"
                ? "Unser Legal & Administrative Team steht für alle Anfragen direkt unter info@fseda.org zur Verfügung."
                : "Our Legal & Administrative team is available for all inquiries directly at info@fseda.org."}
            </p>

            <a
              href="mailto:info@fseda.org"
              className="group bg-primary inline-flex items-center justify-center gap-3 rounded-2xl px-9 py-4 font-medium text-white transition-all shadow-lg hover:shadow-primary/30"
            >
              <Icon icon="tabler:mail" className="size-5" />
              <span>{lang === "de" ? "E-Mail an info@fseda.org senden" : "Send Email to info@fseda.org"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;