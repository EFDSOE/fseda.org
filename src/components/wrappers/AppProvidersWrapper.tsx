import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AppProvidersWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const backdrops = document.querySelectorAll(".hs-overlay-backdrop");
    backdrops.forEach((backdrop) => backdrop.remove());
    document.body.style.overflow = "";
    document.body.style.pointerEvents = "";
    document.documentElement.style.overflow = "";
    document.body.classList.remove("overflow-hidden");
    document.documentElement.classList.remove("overflow-hidden");

    import("preline").then(() => {
      if (typeof window.HSStaticMethods?.autoInit === "function") {
        window.HSStaticMethods.autoInit();
      }
    });
    import("smoothscroll-for-websites");
  }, [location.pathname]);

  return <>{children}</>;
};

export default AppProvidersWrapper;
