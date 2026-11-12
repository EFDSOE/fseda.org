import mainImg from "@/assets/images/other/about-image.png";

const MainImage = () => {
  return (
    <section className="pt-10">
      <div className="container">
        <div className="overflow-hidden rounded-3xl border border-default-200 shadow-sm">
          <img
            src={mainImg}
            alt="EFDSOE Digitales Lernen"
            className="h-[500px] md:h-[660px] w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default MainImage;
