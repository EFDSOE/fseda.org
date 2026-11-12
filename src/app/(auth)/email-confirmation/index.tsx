import PageMeta from "@/components/PageMeta";
import sectionBg1 from "@/assets/images/bg/section-bg-1.png";
import logoSm from "@/assets/images/logo-sm.svg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <PageMeta title="Email Confirmation" />
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

              <h1 className="text-3xl mb-2.5">Verify your email address</h1>
              <p className="mb-7.5">
                Welcome to <span className="font-bold">Cloudkit</span> To get
                started, please verify your email address. Click the
                confirmation link we've sent to your inbox and unlock the full
                potential of your <span className="font-bold">Cloudkit</span>{" "}
                account.
              </p>

              <button
                type="submit"
                className="group p-5 w-full text-xl inline-flex items-center justify-center gap-5 rounded-2xl bg-primary font-bold text-white transition-all"
              >
                Thank you! Check your Email for verification link.
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
