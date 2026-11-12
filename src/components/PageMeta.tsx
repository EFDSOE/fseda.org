import { useEffect } from "react";

type PageData = {
  title?: string;
};

const PageMeta = ({ title }: PageData) => {
  const fullTitle = title
    ? `${title} | Cloudkit - Creative SaaS TailwindCSS 4 Template`
    : "Cloudkit - Creative SaaS TailwindCSS 4 Template";

  useEffect(() => {
    document.title = fullTitle;
  }, [fullTitle]);

  return null;
};

export default PageMeta;
