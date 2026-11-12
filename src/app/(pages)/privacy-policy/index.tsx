import PageMeta from "@/components/PageMeta";
import Hero from "./components/Hero";
import PrivacyPolicy from "./components/PrivacyPolicy";

interface IndexProps {
  lang?: "de" | "en";
}

const Index = ({ lang = "de" }: IndexProps) => {
  return (
    <>
      <PageMeta title={lang === "de" ? "Datenschutz | FSEDA" : "Privacy Policy | FSEDA"} />
      <Hero lang={lang} />
      <PrivacyPolicy lang={lang} />
    </>
  );
};

export default Index;