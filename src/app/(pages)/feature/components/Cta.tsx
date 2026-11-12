import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="relative z-10 mb-20 md:mb-25 lg:mb-37.5">
      <div className="container relative z-20">
        <div className="mb-7.5 text-center lg:mb-10">
          <h2 className="mb-5 text-4xl lg:text-[44px]">
            Werde Teil des Bildungsökosystems
          </h2>
          <p className="mx-auto mb-10 text-default-600 lg:w-3/4">
            Ob Schule, Schulträger oder Bildungspartner – gestalte gemeinsam mit uns die digitale Bildungsarchitektur Europas.
          </p>

          <div className="relative z-30 inline-flex flex-wrap items-center justify-center gap-4">
            {/* Link 1: Extern zur Lernplattform */}
            <a
              href="https://fseda.online"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 relative z-30 inline-flex cursor-pointer items-center justify-center rounded-2xl px-9 py-3.5 font-medium text-white transition-all shadow-sm"
            >
              Lernplattform ausprobieren
            </a>

            {/* Link 2: Intern zur Beteiligungs- / Kontaktseite */}
            <Link
              to="/pricing"
              className="border-default-200 bg-white hover:bg-default-50 text-default-900 relative z-30 inline-flex cursor-pointer items-center justify-center rounded-2xl border px-9 py-3.5 font-medium transition-all shadow-xs"
            >
              Partner werden
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;