import React from "react";

const MainMeta = () => {
  return (
    <div className="mb-[36px] tablet:mb-[100px] tablet:flex tablet:justify-between">
      <h2
        className="tablet:w-[272px] tablet:block font-title text-[28px] tablet:text-[36px] text-mainText leading-[28px] tablet:leading-[36px] \
       mb-[24px] tablet:mb-0"
      >
        MAIN VALUES OF OUR COMPANY
      </h2>
      <p
        className="tablet:block tablet:w-[353px] tablet:pl-[11px] tablet:border-l tablet:border-mainElementsColor \
       font-text text-mainText text-[16px] tracking-[-0.64px]"
      >
        EcoSolution envisions a world where sustainable
        energy solutions power a brighter and cleaner future
        for all. We aspire to be at the forefront of the
        global shift towards renewable energy, leading the
        way in innovative technologies that harness the
        power of nature to meet the world&apos;s energy
        needs.
      </p>
    </div>
  );
};

export default MainMeta;
