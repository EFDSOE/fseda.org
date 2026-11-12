import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="relative z-10 mb-20 md:mb-25 lg:mb-37.5">
      <div className="mb-7.5 text-center lg:mb-10">
        <h2 className="mb-7.5 text-4xl lg:text-[44px]">
          Gestalten Sie die digitale Zukunft der Bildung mit.
        </h2>
        <p className="mx-auto mb-10 lg:w-3/4">
          Ob als Partnerorganisation, Schule oder Stifterin und Stifter:
          Sprechen Sie mit uns über Ihren Weg der Beteiligung.
        </p>

        <div className="relative z-20 flex items-center justify-center gap-4">
          {/* Button 1: Kontakt */}
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary/90 cursor-pointer rounded-2xl px-9 py-3.5 font-medium text-white transition-all"
          >
            Kontakt aufnehmen
          </Link>

          {/* Button 2: Wege der Beteiligung */}
          <Link
            to="/pricing"
            className="border-default-200 hover:bg-default-100 cursor-pointer rounded-2xl border bg-white px-9 py-3.5 font-medium text-primary transition-all"
          >
            Wege der Beteiligung
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;