import Image from "next/image";
import HeroBannerMobile from "@/public/hero/heroBannerMobile.png";
import HeroBannerTablet from "@/public/hero/HeroBannerTablet.png";
import HeroBannerDesktop from "@/public/hero/HeroBunnerDesktop.png";

const HeroSection = () => {
  return (
    <section className="pt-[36px] tablet:pt-[40px] desktop:pt-[36px]">
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
        <Image
          src={HeroBannerDesktop}
          alt="drawn wind power plants"
          width={1240}
          height={524}
          className="mx-auto hidden desktop:block "
        />
      </div>
    </section>
  );
};

export default HeroSection;
