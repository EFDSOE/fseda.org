import client1 from "@/assets/images/client/client-1.svg";
import client2 from "@/assets/images/client/client-2.svg";
import client3 from "@/assets/images/client/client-3.svg";
import client4 from "@/assets/images/client/client-4.svg";
import client5 from "@/assets/images/client/client-5.svg";
import client6 from "@/assets/images/client/client-6.svg";
import client7 from "@/assets/images/client/client-7.svg";

type ClientLogoType = {
  image: string;
  alt: string;
};

const clientLogosData: ClientLogoType[] = [
  { image: client1, alt: "client-1" },
  { image: client2, alt: "client-2" },
  { image: client3, alt: "client-3" },
  { image: client4, alt: "client-4" },
  { image: client5, alt: "client-5" },
  { image: client6, alt: "client-6" },
  { image: client7, alt: "client-7" },
];

const Brands = () => {
  return (
    <section className="pt-10 lg:pt-37.5">
      <div className="container">
        <p className="text-default-950 mb-12.5 text-center text-xl font-medium">
          Preferred by top brands across the globe
        </p>

        <div className="relative flex w-full flex-nowrap gap-16 overflow-hidden">
          <div className="absolute inset-0 end-auto z-10 w-25 bg-linear-to-tr from-white from-18% to-transparent"></div>

          <div className="infinite-scroll-inverse inline-flex gap-16">
            {clientLogosData.map((logo, idx) => (
              <div key={idx} className="inline-flex max-w-full min-w-32">
                <img
                  src={logo.image}
                  className="h-8 max-w-full"
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>

          <div className="infinite-scroll-inverse inline-flex gap-16">
            {clientLogosData.map((logo, idx) => (
              <div key={idx} className="inline-flex max-w-full min-w-32">
                <img
                  src={logo.image}
                  className="h-8 max-w-full"
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 start-auto z-10 w-25 bg-linear-to-l from-white from-18% to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
