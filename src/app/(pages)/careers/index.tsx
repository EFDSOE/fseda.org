import PageMeta from "@/components/PageMeta";
import Hero from "./components/Hero";
import LegalDetails from "./components/LegalDetails";
import LegalDisclaimer from "./components/LegalDisclaimer";
import Cta from "./components/Cta";

interface IndexProps {
  lang?: "de" | "en";
}

const Index = ({ lang = "de" }: IndexProps) => {
  return (
    <>
      <PageMeta title={lang === "de" ? "Impressum | FSEDA" : "Legal Notice | FSEDA"} />
      <Hero lang={lang} />
      <LegalDetails lang={lang} />
      <LegalDisclaimer lang={lang} />
      <Cta lang={lang} />
    </>
  );
};

export default Index;