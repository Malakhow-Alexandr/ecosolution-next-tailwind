import React from "react";
import VerticalLine from "../UtilsComponents/VerticalLine";

const ElectricitySection = () => {
  return (
    <section id="Electricity" className="mb-[24px]">
      <div className="custom-container flex flex-col gap-[24px] items-center">
        <h2 className=" font-title text-[24px] mobile:text-[28px] text-mainText text-center leading-[28px]">
          ELECTRICITY WE PRODUCED
          <br /> FOR ALL TIME
        </h2>
        <VerticalLine height={48} />
        <p
          className="flex items-center gap-[8px] font-title font-bold text-[40px] mobile:text-[48px] text-mainElementsColor \ 
            text-center leading-[48px] "
        >
          1.134.147.814
          <span className="text-mainText text-[20px] mobile:text-[24px] leading-[24px]">
            kWh
          </span>
        </p>
        <VerticalLine height={48} />
      </div>
    </section>
  );
};

export default ElectricitySection;
