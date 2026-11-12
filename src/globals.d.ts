import { IStaticMethods } from "preline/preline";
import { ReactNode } from "react";

declare global {
  type ChildrenType = {
    children: ReactNode;
  };

  type HSOverlayType = {
    close: (selector: string) => void;
    open: (selector: string) => void;
    getInstance: (
      selector: string,
      open?: boolean,
    ) => {
      element: {
        close: () => void;
        saved?: boolean;
        open: () => void;
      };
    };
  };

  interface Window {
    HSStaticMethods: IStaticMethods;
    HSOverlay?: HSOverlayType;
  }
}
