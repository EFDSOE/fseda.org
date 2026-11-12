import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="relative z-10 mb-20 md:mb-25 lg:mb-37.5">
      <div className="container relative z-20">
        <div className="mb-7.5 text-center lg:mb-10">
          <h2 className="mb-5 text-4xl lg:text-[44px]">
            Haben Sie noch Fragen zur Beteiligung?
          </h2>
          <p className="mx-auto mb-10 text-default-600 lg:w-3/4">
            Unser Team berät Sie gerne zu Trägerschaftsmodellen, Anbindungen und Kooperationsmöglichkeiten.
          </p>

          <Link
            to="/contact"
            className="bg-primary hover:bg-primary/90 relative z-30 inline-flex cursor-pointer items-center justify-center rounded-2xl px-9 py-3.5 font-medium text-white transition-all shadow-sm"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;