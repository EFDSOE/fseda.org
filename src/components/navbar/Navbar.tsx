import logo from "@/assets/images/logo.svg";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export type NavigationType = {
  label: string;
  route: string;
};

const Navbar = () => {
  const location = useLocation();

  const menuData: NavigationType[] = [
  { label: "Stiftung & Governance", route: "/about" },
  { label: "Ökosystem", route: "/feature" },
  { label: "Beteiligung", route: "/pricing" },
  { label: "Kontakt", route: "/contact" },
];

  useEffect(() => {
    const overlay = document.getElementById("mobile-menu");
    if (overlay && (window as any).HSOverlay) {
      (window as any).HSOverlay.close(overlay);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".nav-sticky");
      if (navbar) {
        if (window.scrollY >= 100) {
          navbar.classList.add("nav-sticky-on");
        } else {
          navbar.classList.remove("nav-sticky-on");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-140 container max-w-7xl">
      <div className="sticky inset-x-auto top-0 z-120 my-2.5 rounded-2xl bg-[linear-gradient(#fff3,#fff3)] p-1.5 backdrop-blur-sm md:my-5">
        <div className="nav-sticky navbar border-default-100 bg-body-bg/80 flex w-full items-center justify-between gap-4 rounded-xl border px-6 py-3 transition-all duration-300">
          
          {/* 1. LINKS: Das Stiftungs-Logo + Name */}
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <img src={logo} alt="EFDSOE Logo" className="h-9 w-auto object-contain" />
            <div className="flex flex-col text-left">
              <span className="text-default-950 text-sm font-bold leading-tight tracking-wide">
                EFDSOE
              </span>
              <span className="text-default-600 hidden text-[11px] font-medium leading-tight sm:block">
                Digital Sovereignty & Open Education
              </span>
            </div>
          </Link>

          {/* 2. MITTE: Die sauberen Navigations-Links */}
          <div
            id="navbar"
            className="hidden items-center justify-center gap-1 md:flex"
          >
            {menuData.map((item) => (
              <Link
                key={item.route}
                to={item.route}
                className="text-default-600 hover:text-primary whitespace-nowrap px-3 py-2 text-sm font-medium transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* 3. RECHTS: Der Lernplattform-CTA Button */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="https://fseda.online"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white transition-all sm:text-sm"
            >
              <span>Lernplattform fseda.online</span>
              <Icon icon="tabler:arrow-up-right" className="size-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="mobile-menu"
              data-hs-overlay="#mobile-menu"
              className="bg-primary inline-flex size-9 items-center justify-center rounded-md font-medium text-white transition-all md:hidden"
            >
              <Icon icon="tabler:align-right" className="size-5" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menü */}
      <div
        id="mobile-menu"
        className="hs-overlay hs-overlay-open:translate-y-0 hs-overlay-open:opacity-100 hs-overlay-open:top-auto fixed inset-x-0 top-0 z-140 h-auto -translate-y-full transform opacity-0 transition-all duration-300 [--body-scroll:true] md:hidden"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="mobile-menu-label"
      >
        <div className="container">
          <div className="bg-body-bg mb-4 rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col gap-2">
              {menuData.map((item) => (
                <Link
                  key={"mobile-" + item.route}
                  to={item.route}
                  className="text-default-600 hover:text-primary block px-4 py-2 font-medium transition-all"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://fseda.online"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary mt-2 block w-full rounded-xl py-2.5 text-center font-medium text-white"
              >
                Lernplattform fseda.online
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
