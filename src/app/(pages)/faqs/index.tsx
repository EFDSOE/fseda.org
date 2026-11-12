import PageMeta from "@/components/PageMeta";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";

interface IndexProps {
  lang?: "de" | "en";
}

const Index = ({ lang = "de" }: IndexProps) => {
  return (
    <>
      <PageMeta title={lang === "de" ? "Häufige Fragen (FAQ) | FSEDA" : "FAQs | FSEDA"} />
      <Hero lang={lang} />
      <Faqs lang={lang} />
    </>
  );
};

export default Index;