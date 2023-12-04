import Image from "next/image";
import HeroBannerMobile from "@/public/hero/heroBannerMobile.png";
import HeroBannerTablet from "@/public/hero/HeroBannerTablet.png";

const HeroSection = () => {
  return (
    <section
      className="mb-[36px] tablet:mb-[100px]"
      id="About"
    >
      <div className="custom-container">
        <Image
          src={HeroBannerMobile}
          alt="drawn wind power plants"
          width={320}
          height={200}
          className="mx-auto tablet:hidden"
        />
        <Image
          src={HeroBannerTablet}
          alt="drawn wind power plants"
          width={728}
          height={348}
          className="mx-auto hidden tablet:block desktop:hidden"
        />
      </div>
    </section>
  );
};

export default HeroSection;
