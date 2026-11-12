import avatar1 from "@/assets/images/avatars/1.png";
import avatar2 from "@/assets/images/avatars/2.png";
import avatar6 from "@/assets/images/avatars/6.png";
import sectionBg1 from "@/assets/images/bg/section-bg-1.png";

type TestimonialType = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const testimonialsData: TestimonialType[] = [
  {
    quote:
      "“Digitale Souveränität bedeutet für unsere Schulen, dass wir nicht von Lizenzmodellen abhängig sind, sondern Bildung langfristig selbst gestalten können.”",
    name: "Dr. M. Weber",
    role: "Vertreter Schulträger-Allianz",
    avatar: avatar1,
  },
  {
    quote:
      "“Der offene Quellcode und die barrierefreie Lernplattform fseda.online ermöglichen genau den fairen Zugang zu Bildung, den wir brauchen.”",
    name: "S. Lindner",
    role: "Pädagogische Leitung",
    avatar: avatar6,
  },
  {
    quote:
      "“Als Stiftung garantieren wir absolute Unabhängigkeit. Kein Datenhandel, keine Investoren – 100 % Fokus auf freie Bildung.”",
    name: "A. Bauer",
    role: "Stiftungsrat EFDSOE",
    avatar: avatar2,
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-25 lg:py-37.5">
      <img
        className="absolute inset-0 -z-1 size-full object-cover opacity-90"
        src={sectionBg1}
        alt="Decoration"
      />

      <div className="absolute inset-[-10%] bottom-auto -z-1 h-50 bg-white blur-2xl"></div>
      <div className="absolute inset-[-10%] top-auto -z-1 h-50 bg-white blur-2xl"></div>

      <div className="container">
        <div className="mb-7.5 text-center lg:mb-10">
          <h2 className="text-4xl lg:text-[44px]">Stimmen aus dem Netzwerk</h2>
        </div>

        <div className="relative columns-1 gap-x-7.5 lg:mb-25 lg:columns-3">
          {testimonialsData.map((testimonial, idx) => (
            <div
              key={idx}
              className="border-default-200 to-default-100/20 mb-6 rounded-2xl border bg-linear-to-b from-transparent p-2.5"
            >
              <div className="from-default-100/30 rounded-2xl bg-linear-to-b to-transparent p-5">
                <p className="mb-6 text-default-700 leading-relaxed">{testimonial.quote}</p>

                <div className="flex gap-2.5 items-center">
                  <img
                    src={testimonial.avatar}
                    alt="Avatar Image"
                    className="size-11 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-default-950">{testimonial.name}</h3>
                    <div className="text-xs text-default-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-4/5 mx-auto text-center border border-default-200 rounded-3xl p-8 bg-white/80 backdrop-blur-sm shadow-xs">
          <div>
            <h2 className="lg:text-[44px] text-4xl font-bold text-primary mb-1">100%</h2>
            <div className="text-sm font-medium text-default-700">Gemeinnützige Stiftung</div>
          </div>
          <div>
            <h2 className="lg:text-[44px] text-4xl font-bold text-primary mb-1">0 €</h2>
            <div className="text-sm font-medium text-default-700">Kosten für Grundschulnutzung</div>
          </div>
          <div>
            <h2 className="lg:text-[44px] text-4xl font-bold text-primary mb-1">EU</h2>
            <div className="text-sm font-medium text-default-700">Server & Datensouveränität</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;