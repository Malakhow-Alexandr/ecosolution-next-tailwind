import Image from "next/image";
import HeroBanner from "@/public/hero/heroBanner.png";

const Hero = () => {
  return (
    <section>
      <div className="custom-container">
        <Image
          src={HeroBanner}
          alt="drawn wind power plants"
          width={1200}
          height={524}
          className="mx-auto mb-[36px]"
        />
        <h2 className="capitalize font-title text-[28px] text-mainText leading-[28px] mb-[24px]">
          LET’S START WITH SMALL START WITH OURSELVES
        </h2>
        <p className="font-text text-[16px] font-normal tracking-[-0.64px] text-mainText">
          <span className="text-mainElementsColor font-[500]">ECOSOLUTION</span>{" "}
          is the largest group of companies in Western Ukraine, which is engaged
          in the development and implementation of renewable environmentally
          friendly energy sources. We are the first privately owned company that
          received a loan from the European Bank for Reconstruction and
          Development (EBRD) and built the first wind farm in Western Ukraine.
          During the company&apos;s work, a number of projects in the field of
          energy were implemented. At the same time, new investment projects, in
          particular small hydropower and biofuels, are constantly being
          developed and developed with existing objects.
        </p>
      </div>
    </section>
  );
};

export default Hero;
