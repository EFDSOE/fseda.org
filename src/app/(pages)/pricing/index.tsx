import PageMeta from "@/components/PageMeta";
import Cta from "./components/Cta";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";

const Index = () => {
  return (
    <>
      <PageMeta title="Beteiligung & Trägerschaft" />
      <Hero />
      <Plans />
      <Testimonials />
      <Faqs />
      <Cta />
    </>
  );
};

export default Index;