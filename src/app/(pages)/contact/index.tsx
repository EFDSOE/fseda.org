import PageMeta from "@/components/PageMeta";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import HelpCenter from "./components/HelpCenter";
import Hero from "./components/Hero";
import landscapeImg from "@/assets/images/other/contact-landscape.jpg"; // <-- Unser Naturbild importieren

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView({ behavior: 'smooth' }); // Schöner, sanfter Scroll
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <>
      <PageMeta title="Kontakt" />
      <Hero />
      <HelpCenter />

      {/* Großer Bild-Trenner: Die aufgehende Sonne in der Natur */}
      <section className="py-6">
        <div className="container">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-default-200 shadow-md">
            <img
              src={landscapeImg}
              alt="Ausblick in die freie Natur bei Sonnenaufgang vom Fenster aus"
              className="w-full h-auto max-h-[580px] md:max-h-[560px] object-cover"
            />
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
};

export default Index;