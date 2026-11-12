import { Link } from "react-router-dom";
import blog2 from "@/assets/images/blog/2.png";
import blog3 from "@/assets/images/blog/3.png";

type RecentBlogType = {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
};

const recentBlogsData: RecentBlogType[] = [
  {
    image: blog2,
    category: "Cloud Storage",
    date: "Feb 13, 2025",
    title: "Keeping cloud applications secure",
    description:
      "The latest security measures to protect cloud-based SaaS solutions.",
  },
  {
    image: blog3,
    category: "Enhanced Security",
    date: "Feb 13, 2025",
    title: "Advanced analytics for smarter decisions",
    description: "How AI-driven insights help businesses optimize operations.",
  },
];

const RecentBlogs = () => {
  return (
    <>
      <section className="relative z-20 overflow-hidden lg:pb-37.5 md:pb-25">
        <div className="container">
          <div className="mb-5 text-center gap-4 md:mb-7.5 lg:mb-15">
            <h2 className="text-4xl lg:text-[44px]">Recent Blogs</h2>
          </div>

          <div className="mb-10 grid gap-7.5 md:grid-cols-2">
            {recentBlogsData.map((blog, idx) => (
              <div key={idx}>
                <div className="group relative border-default-200 from-default-100 rounded-2xl border bg-linear-to-b to-transparent p-2.5">
                  <Link
                    to="/blog-details"
                    className="absolute inset-0 z-1"
                    aria-label="Read post"
                  ></Link>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={blog.image}
                      alt="Blog Image"
                      className="size-full overflow-hidden object-cover transition-all duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-4 pt-6">
                    <div className="mb-2.5 flex items-center justify-between">
                      <div className="border-default-200 from-default-100 rounded-full border bg-linear-to-b to-transparent px-2.5 py-1">
                        {blog.category}
                      </div>
                      <p>{blog.date}</p>
                    </div>

                    <h2 className="mb-2.5 text-2xl">{blog.title}</h2>
                    <p>{blog.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentBlogs;
