import PageMeta from "@/components/PageMeta";
import Blog from "./components/Blog";
import Hero from "./components/Hero";

const Index = () => {
  return (
    <>
      <PageMeta title="Blog" />
      <Hero />
      <Blog />
    </>
  );
};

export default Index;
