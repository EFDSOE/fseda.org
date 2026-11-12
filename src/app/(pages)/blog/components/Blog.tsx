import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import blog1 from "@/assets/images/blog/1.png";
import blog2 from "@/assets/images/blog/2.png";
import blog3 from "@/assets/images/blog/3.png";
import blog4 from "@/assets/images/blog/4.png";

type BlogPostType = {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
};

const blogPostsData: BlogPostType[] = [
  {
    image: blog1,
    category: "Cloud Storage",
    date: "Feb 13, 2026",
    title: "Keeping cloud applications secure",
    description:
      "The latest security measures to protect cloud-based SaaS solutions.",
  },
  {
    image: blog2,
    category: "Collaboration",
    date: "Feb 14, 2026",
    title: "Why speed & reliability matter in the cloud",
    description: "How performance optimization enhances SaaS user experience.",
  },
  {
    image: blog3,
    category: "Cloud Storage",
    date: "Feb 14, 2026",
    title: "Cloud collaboration: Boosting team productivity",
    description:
      "How cloud-based workspaces improve efficiency and remote teamwork.",
  },
  {
    image: blog4,
    category: "Enhanced Security",
    date: "Feb 13, 2026",
    title: "The future of cloud storage",
    description:
      "How modern cloud storage enhances scalability, security, and accessibility.",
  },
];

const Blog = () => {
  return (
    <>
      <section className="relative z-20 overflow-hidden lg:pb-37.5 md:pb-25">
        <div className="container">
          <div className="mb-10 grid gap-7.5 md:grid-cols-2">
            {blogPostsData.map((post, idx) => (
              <div key={idx}>
                <div className="group relative border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-2.5">
                  <Link
                    to="/blog-details"
                    className="absolute inset-0 z-1"
                    aria-label="Read post"
                  ></Link>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={post.image}
                      alt="Blog Image"
                      className="size-full overflow-hidden object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-4 pt-6">
                    <div className="mb-2.5 flex items-center justify-between">
                      <div className="border-default-200 from-default-100 rounded-full border bg-linear-to-b to-transparent px-2.5 py-1">
                        {post.category}
                      </div>
                      <p>{post.date}</p>
                    </div>

                    <h2 className="mb-2.5 text-2xl">{post.title}</h2>
                    <p>{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <nav className="mt-10 grid grid-cols-3 items-center lg:mt-12.5">
            <div>
              <button
                disabled
                className="bg-primary flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base font-medium text-white opacity-0 transition-all"
              >
                <Icon icon="tabler:chevron-left" />
                Previous
              </button>
            </div>

            <div className="text-center">1 / 2</div>

            <div>
              <button className="flex items-center justify-center gap-2 w-full text-center py-3.5 px-6 bg-primary rounded-2xl text-white transition-all text-base font-medium">
                Next
                <Icon icon="tabler:chevron-right"></Icon>
              </button>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Blog;
