import PageMeta from "@/components/PageMeta";
import BlogDetails from "./components/BlogDetails";
import Hero from "./components/Hero";
import RecentBlogs from "./components/RecentBlogs";

const Index = () => {
  return (
    <>
      <PageMeta title="Blog Detail" />
      <Hero />
      <BlogDetails />
      <RecentBlogs />
    </>
  );
};

export default Index;
