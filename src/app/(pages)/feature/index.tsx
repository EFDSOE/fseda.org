import PageMeta from "@/components/PageMeta";
import Benefits from "./components/Benefits";
import Cta from "./components/Cta";
import Faqs from "./components/Faqs";
import FeatureGrid from "./components/FeatureGrid";
import Hero from "./components/Hero";

const Index = () => {
  return (
    <>
      <PageMeta title="Ökosystem – Modulare Bildungsarchitektur" />
      <Hero />
      <FeatureGrid />
      <Benefits />
      <Faqs />
      <Cta />
    </>
  );
};

export default Index;