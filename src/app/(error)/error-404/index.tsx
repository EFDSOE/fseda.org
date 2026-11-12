import PageMeta from "@/components/PageMeta";
import sectionBg1 from "@/assets/images/bg/section-bg-1.png";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <PageMeta title="404" />
      <section className="relative bg-white lg:py-50 py-25">
        <div className="container">
          <div className="relative z-10 bg-white w-150 mx-auto border border-default-300 rounded-2xl overflow-hidden">
            <img
              className="absolute inset-0 size-full object-cover -z-1"
              src={sectionBg1}
              alt="Decoration"
            />

            <div className="lg:p-15 p-10 text-center flex flex-col gap-5">
              <h2 className="lg:text-8xl text-7xl">404</h2>

              <h3 className="lg:text-4xl">Page not found</h3>

              <p className="text-default-600 mb-4">
                The page you are looking for doesn't exist or has been moved.
              </p>

              <div className="flex justify-center">
                <Link
                  to="/"
                  className="group py-3.5 px-9 inline-flex items-center justify-center gap-5 rounded-2xl bg-primary font-medium text-white transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                      Back to Home
                    </span>
                    <span className="absolute top-7 start-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                      Back to Home
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
