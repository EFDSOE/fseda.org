import PageMeta from "@/components/PageMeta";
import Cta from "./components/Cta";
import GovernancePillars from "./components/GovernancePillars";
import Hero from "./components/Hero";
import MainImage from "./components/MainImage";
import Team from "./components/Team";

const Index = () => {
  return (
    <>
      <PageMeta title="Stiftung & Governance" />
      <Hero />
      <MainImage />
      <GovernancePillars />
      <Team />
      <Cta />
    </>
  );
};

export default Index;
