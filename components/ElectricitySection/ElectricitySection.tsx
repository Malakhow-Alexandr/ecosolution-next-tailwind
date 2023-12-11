"use client";

import React, { useState, useEffect } from "react";
import VerticalLine from "../UtilsComponents/VerticalLine";

const ElectricitySection = () => {
  const [electricityCount, setElectricityCount] =
    useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElectricityCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatNumber = (number: Number) => {
    return number
      .toLocaleString("en-US")
      .replace(/,/g, ".");
  };

  return (
    <section
      id="Electricity"
      className="pt-[36px] tablet:pt-[100px] desktop:pt-[120px]"
    >
      <div className="custom-container flex flex-col gap-[24px] items-center">
        <h2
          className=" font-title text-[24px] tablet:text-[36px] desktop:text-[48px] mobile:text-[28px] text-mainText text-center \
         leading-[28px] tablet:leading-[36px] desktop:leading-[48px]"
        >
          ELECTRICITY WE PRODUCED
          <br /> FOR ALL TIME
        </h2>
        <VerticalLine classNames="h-[48px] tablet:h-[87px]" />
        <p
          className="relative h-[50px] tablet:h-[102px] desktop:h-[166px] w-[260px] mobile:w-[312px] tablet:w-[611px] desktop:w-[995px] \
          mx-auto flex items-center justify-between gap-[8px] font-title font-bold text-[40px] mobile:text-[48px] tablet:text-[100px] \
          desktop:text-[164px] text-mainElementsColor text-center \
          leading-[48px] tablet:leading-[100px] desktop:leading-[164px]"
        >
          <span className="absolute">
            {formatNumber(electricityCount)}
          </span>

          <span
            className="absolute right-0 text-mainText font-normal text-[20px] mobile:text-[24px] tablet:text-[28px] desktop:text-[48px] \ 
          leading-[24px] tablet:leading-[28px] desktop:leading-[48px]"
          >
            kWh
          </span>
        </p>
      </div>
    </section>
  );
};

export default ElectricitySection;
