import PageMeta from "@/components/PageMeta";
import sectionBg1 from "@/assets/images/bg/section-bg-1.png";
import logoSm from "@/assets/images/logo-sm.svg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <PageMeta title="Sign Up" />
      <section className="relative size-full min-h-screen flex flex-col items-center justify-center p-5">
        <img
          className="absolute inset-0 size-full object-cover -z-1"
          src={sectionBg1}
          alt="Decoration"
        />

        <div className="container">
          <div className="p-2.5 relative z-10 lg:w-[56%] mx-auto rounded-3xl border border-default-200 bg-linear-to-b from-default-100 to-transparent">
            <div className="bg-white rounded-2xl lg:p-12.5 p-10">
              <Link
                to="/"
                className="mb-7.5 size-20 flex items-center justify-center rounded-full bg-default-100"
              >
                <img src={logoSm} alt="Logo Small Image" className="size-10" />
              </Link>

              <h1 className="text-3xl mb-2.5">Sign up for exclusive access</h1>
              <p className="mb-7.5">
                Create your account now and start enjoying exclusive benefits!
              </p>

              <div className="mb-5">
                <label htmlFor="name" className="mb-1 font-medium block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="rounded-xl bg-linear-to-b from-default-100 to-transparent h-12.5 py-2 px-5 w-full flex items-center border border-default-200"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email-id" className="mb-1 font-medium block">
                  Email
                </label>
                <input
                  type="email"
                  id="email-id"
                  className="rounded-xl bg-linear-to-b from-default-100 to-transparent h-12.5 py-2 px-5 w-full flex items-center border border-default-200"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="mb-1 font-medium block">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="rounded-xl bg-linear-to-b from-default-100 to-transparent h-12.5 py-2 px-5 w-full flex items-center border border-default-200"
                />
              </div>

              <div className="mb-5 flex items-center gap-1.5">
                <input
                  type="checkbox"
                  name="Checkbox"
                  id="checkbox-privacy-policy"
                  className="form-checkbox size-5 border-default-200 rounded text-primary focus:outline-0 focus:ring-0"
                />
                <label
                  className="w-checkbox checkbox-field"
                  htmlFor="checkbox-privacy-policy"
                >
                  I have read and agree to the{" "}
                  <Link
                    to="/privacy-policy"
                    className="underline font-bold text-default-900"
                  >
                    Privacy Policy.
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className="group py-3.5 px-9 inline-flex items-center justify-center gap-5 rounded-xl bg-primary font-medium text-white transition-all"
              >
                <span className="relative block overflow-hidden">
                  <span className="block group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Submit
                  </span>
                  <span className="absolute top-7 start-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Submit
                  </span>
                </span>
              </button>

              <div className="mt-7.5 flex items-center justify-between">
                <div>
                  Already have an account &nbsp;
                  <Link
                    to="/log-in"
                    className="underline font-bold text-default-900"
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
