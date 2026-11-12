import client1 from "@/assets/images/client/client-1.svg";
import client2 from "@/assets/images/client/client-2.svg";
import client3 from "@/assets/images/client/client-3.svg";
import client4 from "@/assets/images/client/client-4.svg";
import client5 from "@/assets/images/client/client-5.svg";
import client6 from "@/assets/images/client/client-6.svg";
import client7 from "@/assets/images/client/client-7.svg";
import appleIcon from "@/assets/images/other/apple-icon.svg";
import googleIcon from "@/assets/images/other/google-icon.svg";
import { Icon } from "@iconify/react";

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

        <div className="mx-auto mt-10 md:mt-12.5 lg:mt-20 lg:w-[53%]">
          <div className="grid grid-cols-2 gap-7.5">
            <div className="flex items-start gap-5">
              <img src={googleIcon} className="size-14" alt="Google Icon" />

              <div>
                <div className="from-default-100 border-default-950/10 text-default-950 inline-flex items-center justify-center gap-2.5 rounded-md border bg-linear-to-b to-transparent px-2.5 py-1.25 text-sm/4 font-medium">
                  <Icon
                    icon="tabler:star-filled"
                    className="size-3.5 text-yellow-400"
                  />{" "}
                  4.5 / 5.0
                </div>
                <p className="mt-1.5 text-sm">Rating by 458 users</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <img src={appleIcon} className="size-14" alt="Apple Icon" />

              <div>
                <div className="from-default-100 border-default-950/10 text-default-950 inline-flex items-center justify-center gap-2.5 rounded-md border bg-linear-to-b to-transparent px-2.5 py-1.25 text-sm/4 font-medium">
                  <Icon
                    icon="tabler:star-filled"
                    className="size-3.5 text-yellow-400"
                  />{" "}
                  4.0 / 5.0
                </div>
                <p className="mt-1.5 text-sm">Rating by 359 users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
