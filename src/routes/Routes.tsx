import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("@/app/(pages)/home/index"));
const About = lazy(() => import("@/app/(pages)/about/index"));
const Blog = lazy(() => import("@/app/(pages)/blog/index"));
const BlogDetails = lazy(() => import("@/app/(pages)/blog-details/index"));
const Careers = lazy(() => import("@/app/(pages)/careers/index"));
const Contact = lazy(() => import("@/app/(pages)/contact/index"));
const FAQs = lazy(() => import("@/app/(pages)/faqs/index"));
const Feature = lazy(() => import("@/app/(pages)/feature/index"));
const Pricing = lazy(() => import("@/app/(pages)/pricing/index"));
const PrivacyPolicy = lazy(() => import("@/app/(pages)/privacy-policy/index"));
const RequestDemo = lazy(() => import("@/app/(pages)/request-demo/index"));

const EmailConfirmation = lazy(
  () => import("@/app/(auth)/email-confirmation/index"),
);
const LogIn = lazy(() => import("@/app/(auth)/log-in/index"));
const ResetPassword = lazy(() => import("@/app/(auth)/reset-password/index"));
const SignUp = lazy(() => import("@/app/(auth)/sign-up/index"));
const UpdatePassword = lazy(() => import("@/app/(auth)/update-password/index"));

const Error401 = lazy(() => import("@/app/(error)/error-401/index"));
const Error404 = lazy(() => import("@/app/(error)/error-404/index"));

type RouteType = {
  path: string;
  name: string;
  element: React.ReactNode;
  layout?: "main" | "none";
};

export const AllRoutes: RouteType[] = [
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/home" replace />,
    layout: "none",
  },
  {
    path: "/home",
    name: "Home",
    element: <Home />,
    layout: "main",
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
    layout: "main",
  },
  {
    path: "/blog",
    name: "Blog",
    element: <Blog />,
    layout: "main",
  },
  {
    path: "/blog-details",
    name: "BlogDetails",
    element: <BlogDetails />,
    layout: "main",
  },
  {
    path: "/careers",
    name: "Careers",
    element: <Careers />,
    layout: "main",
  },
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />,
    layout: "main",
  },
  {
    path: "/faqs",
    name: "FAQs",
    element: <FAQs />,
    layout: "main",
  },
  {
    path: "/feature",
    name: "Feature",
    element: <Feature />,
    layout: "main",
  },
  {
    path: "/pricing",
    name: "Pricing",
    element: <Pricing />,
    layout: "main",
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    element: <PrivacyPolicy />,
    layout: "main",
  },
  {
    path: "/request-demo",
    name: "RequestDemo",
    element: <RequestDemo />,
    layout: "main",
  },
  {
    path: "/email-confirmation",
    name: "EmailConfirmation",
    element: <EmailConfirmation />,
    layout: "none",
  },
  {
    path: "/log-in",
    name: "LogIn",
    element: <LogIn />,
    layout: "none",
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    element: <ResetPassword />,
    layout: "none",
  },
  {
    path: "/sign-up",
    name: "SignUp",
    element: <SignUp />,
    layout: "none",
  },
  {
    path: "/update-password",
    name: "UpdatePassword",
    element: <UpdatePassword />,
    layout: "none",
  },
  {
    path: "/error-401",
    name: "Error401",
    element: <Error401 />,
    layout: "none",
  },
  {
    path: "/error-404",
    name: "Error404",
    element: <Error404 />,
    layout: "none",
  },
  {
    path: "*",
    name: "NotFound",
    element: <Navigate to="/error-404" replace />,
    layout: "none",
  },
];
