import React from "react";
import { advantagesBd } from "@/bd/advantagesBd";
import AdvantageItem from "./AdvantageItem";

const MainAdvantages = () => {
  return (
    <ul className="grid grid-cols-2 tablet:grid-cols-4 gap-[24px] desktop:gap-[44px]">
      {advantagesBd.map(
        ({ title, advantage, picture }, index) => (
          <AdvantageItem
            key={title}
            advantage={advantage}
            picture={picture}
            title={title}
            position={
              index === 2 || index === 3
                ? "tablet:col-span-2"
                : ""
            }
          />
        )
      )}
    </ul>
  );
};

export default MainAdvantages;
