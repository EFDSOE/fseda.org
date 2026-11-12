import PageMeta from "@/components/PageMeta";
import sectionBg1 from "@/assets/images/bg/section-bg-1.png";
import logoSm from "@/assets/images/logo-sm.svg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <PageMeta title="Reset Password" />
      <section className="relative flex size-full min-h-screen flex-col items-center justify-center p-5">
        <img
          className="absolute inset-0 -z-1 size-full object-cover"
          src={sectionBg1}
          alt="Decoration"
        />

        <div className="container">
          <div className="border-default-200 from-default-100 relative z-10 mx-auto rounded-3xl border bg-linear-to-b to-transparent p-2.5 lg:w-[56%]">
            <div className="rounded-2xl bg-white p-10 lg:p-12.5">
              <Link
                to="/"
                className="bg-default-100 mb-7.5 flex size-20 items-center justify-center rounded-full"
              >
                <img src={logoSm} alt="Logo Small Image" className="size-10" />
              </Link>

              <h1 className="mb-2.5 text-3xl">Reset your Password</h1>
              <p className="mb-7.5">
                Enter your email below to receive a link for creating a new
                password and regain access to your account.
              </p>

              <div className="mb-5">
                <label htmlFor="email-id" className="mb-1 block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email-id"
                  className="from-default-100 border-default-200 flex h-12.5 w-full items-center rounded-xl border bg-linear-to-b to-transparent px-5 py-2"
                />
              </div>

              <button
                type="submit"
                className="group bg-primary inline-flex items-center justify-center gap-5 rounded-xl px-9 py-3.5 font-medium text-white transition-all"
              >
                <span className="relative block overflow-hidden">
                  <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                    Send Reset Link
                  </span>
                  <span className="absolute start-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                    Send Reset Link
                  </span>
                </span>
              </button>

              <div className="mt-7.5 flex items-center justify-between">
                <div>
                  Remember the password? &nbsp;
                  <Link
                    to="/log-in"
                    className="text-default-900 font-bold underline"
                  >
                    Login Here.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
