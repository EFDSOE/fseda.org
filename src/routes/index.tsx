import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@/app/MainLayout";
import { AllRoutes } from "./Routes";

const AppRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        {AllRoutes.map((route) => {
          const element =
            route.layout === "none" ? (
              route.element
            ) : (
              <MainLayout>{route.element}</MainLayout>
            );
          return <Route key={route.name} path={route.path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
