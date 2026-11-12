import decoration3 from "@/assets/images/bg/decoration-3.png";
import decoration5 from "@/assets/images/bg/decoration-5.png";
import footerBg from "@/assets/images/bg/footer-bg.png";
import logo from "@/assets/images/logo.svg";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";

type LinkType = {
  link: string;
  label: string;
};

type SocialLinkType = {
  link: string;
  icon: string;
  title: string;
};

const pagesLinksData: LinkType[] = [
  { link: "/home", label: "Home" },
  { link: "/about", label: "Stiftung & Governance" },
  { link: "/feature", label: "Ökosystem" },
  { link: "/pricing", label: "Beteiligung" },
  { link: "/contact", label: "Kontakt" },
];

const utilityLinksData: LinkType[] = [
  { link: "/faqs", label: "FAQs" },
  { link: "/privacy-policy", label: "Datenschutz" },
  { link: "/careers", label: "Impressum" },
];

// Ethisches & Transparentes Netzwerke-Setup (Ohne US-Social-Media-Tracking)
const socialLinksData: SocialLinkType[] = [
  { 
    link: "https://www.linkedin.com/in/efdsoe/", 
    icon: "tabler:brand-linkedin-filled",
    title: "LinkedIn (Partner & Stiftungsnetzwerk)" 
  },
  { 
    link: "https://github.com/EFDSOE", 
    icon: "tabler:brand-github-filled",
    title: "GitHub (Open Source Code)" 
  },
  { 
    link: "https://codeberg.org/EFDSOE", 
    icon: "tabler:code",
    title: "Codeberg (Gemeinnütziger EU Open-Source-Host)" 
  },
  { 
    link: "https://mastodon.social/@EFDSOE", 
    icon: "tabler:brand-mastodon",
    title: "Mastodon (Dezentrales Web)" 
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
   setErrorMsg("");

    try {
      const response = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        const data = await response.json();
        setErrorMsg(data.error || "Fehler beim Speichern der E-Mail.");
      }
    } catch (error) {
      console.error("Netzwerkfehler zum Express-Server:", error);
      setErrorMsg("Verbindung zum Server fehlgeschlagen.");
    }
  };

  return (
    <footer
      id="footer"
      className="relative -mt-48 overflow-hidden pt-44 md:pt-40 lg:-mt-75 lg:pt-80"
    >
      <img
        src={footerBg}
        alt="Decoration Background"
        className="absolute inset-x-0 bottom-[-4%] top-auto -z-1 size-full opacity-50"
      />
      <div className="absolute bottom-auto end-[-10%] start-[-10%] top-[-43%] -z-1 h-125 bg-white blur-2xl lg:top-[-39%]"></div>

      <div className="container">
        <div className="border-default-200/20 from-default-100/20 rounded-2xl border bg-linear-to-b to-transparent p-2.5">
          <div className="from-default-100/70 rounded-2xl bg-linear-to-b to-transparent p-15">
            <div className="grid gap-12.5 lg:grid-cols-4 lg:gap-25">
              <div className="col-span-2">
                <div className="flex h-full flex-col justify-between gap-5">
                  <Link to="/" className="flex items-center gap-3">
                    <img src={logo} alt="EFDSOE Logo" className="h-10 w-auto object-contain" />
                    <span className="text-default-950 font-bold tracking-wide">EFDSOE</span>
                  </Link>

                  <div>
                    <h2 className="mb-2 text-xl font-medium">
                      Bleiben Sie informiert (Newsletter)
                    </h2>
                    <p className="text-default-500 text-xs mb-4">
                      100 % DSGVO-konform. Speicherung ausschließlich auf eigenen EU-Servern.
                    </p>

                    {submitted ? (
                      <div className="border-primary/20 bg-primary/10 text-primary rounded-2xl border p-4 text-sm font-medium">
                        Vielen Dank! Ihre E-Mail wurde erfolgreich in unseren Verteiler eingetragen.
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <div className="flex gap-4">
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-default-200 flex h-12.5 w-full items-center rounded-2xl border bg-white px-5 py-2 text-sm outline-none focus:border-primary"
                            placeholder="Ihre E-Mail-Adresse"
                          />

                          <button
                            type="submit"
                            className="bg-primary hover:bg-primary/90 flex shrink-0 cursor-pointer items-center justify-center rounded-2xl px-8 py-3.5 font-medium text-white transition-all"
                          >
                            Abonnieren
                          </button>
                        </div>
                        {errorMsg && (
                          <p className="text-red-500 text-xs px-2">{errorMsg}</p>
                        )}
                      </form>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-5.5 text-xl/[1.2em] font-medium">Navigation</h3>

                <div className="*:text-default-600 *:hover:text-primary space-y-2.5 *:block *:leading-[1.3em]">
                  {pagesLinksData.map((link, idx) => (
                    <Link key={idx} to={link.link}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-5.5 text-xl/[1.2em] font-medium">
                  Rechtliches & Governance
                </h4>
                <div className="*:text-default-600 *:hover:text-primary space-y-2.5 *:block *:leading-[1.3em]">
                  {utilityLinksData.map((link, idx) => (
                    <Link key={idx} to={link.link}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-default-100 mb-7.5 mt-12.5" />

            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="text-default-600 text-sm text-center sm:text-left">
                © {new Date().getFullYear()} EFDSOE – Digital Sovereignty & Open Education. Datensouverän & Gemeinnützig.
              </div>

              <div className="flex gap-3">
                {socialLinksData.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.title}
                    className="hover:bg-primary/10 hover:text-primary text-default-600 flex size-9 items-center justify-center rounded-xl bg-white border border-default-200 transition-all duration-300"
                  >
                    <Icon icon={link.icon} className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src={decoration5}
        alt="Decoration 5"
        className="absolute bottom-auto end-auto start-12.5 top-62.5 -z-1 h-50 w-75 opacity-30 md:start-[5%] md:top-[25%] lg:start-[2%] lg:top-[40%]"
      />
      <img
        src={decoration3}
        alt="Decoration 3"
        className="absolute -end-7.5 bottom-auto start-auto top-101 -z-1 h-50 w-100 md:end-[-1%] md:top-[40%] lg:end-[-2%] lg:top-[44%]"
      />
    </footer>
  );
};

export default Footer;
