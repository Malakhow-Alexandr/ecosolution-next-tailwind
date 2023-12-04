import React from "react";
import VerticalLine from "../UtilsComponents/VerticalLine";

const ElectricitySection = () => {
  return (
    <section
      id="Electricity"
      className="mb-[36px] tablet:mb-[100px]"
    >
      <div className="custom-container flex flex-col gap-[24px] items-center">
        <h2
          className=" font-title text-[24px] tablet:text-[36px] mobile:text-[28px] text-mainText text-center \
         leading-[28px] tablet:leading-[36px]"
        >
          ELECTRICITY WE PRODUCED
          <br /> FOR ALL TIME
        </h2>
        <VerticalLine classNames="h-[48px] tablet:h-[87px]" />
        <p
          className="flex items-center gap-[8px] font-title font-bold text-[40px] tablet:text-[100px] mobile:text-[48px] text-mainElementsColor \ 
            text-center leading-[48px] tablet:leading-[100px]"
        >
          1.134.147.814
          <span className="text-mainText font-normal text-[20px] tablet:text-[28px] mobile:text-[24px] leading-[24px] tablet:leading-[48px]">
            kWh
          </span>
        </p>
      </div>
    </section>
  );
};

export default ElectricitySection;
