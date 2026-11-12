import PageMeta from "@/components/PageMeta";
import Cta from "./components/Cta";
import HassleFree from "./components/HassleFree";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Potential from "./components/Potential";
import PowerfulFeatures from "./components/PowerfulFeatures";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

const Index = () => {
  return (
    <>
      <PageMeta title="Home" />
      <Hero />
      <PowerfulFeatures />
      <HassleFree />
      <Integrations />
      <Potential />
      <Pricing />
      <Testimonials />
      <Cta />
    </>
  );
};

export default Index;
