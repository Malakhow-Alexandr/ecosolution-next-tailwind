import React from "react";
import { advantagesBd } from "@/bd/advantagesBd";
import AdvantageItem from "./AdvantageItem";

const MainAdvantages = () => {
  return (
    <ul className="grid mobile:grid-cols-2 gap-[24px]">
      {advantagesBd.map(({ title, advantage, picture }) => (
        <AdvantageItem
          key={title}
          advantage={advantage}
          picture={picture}
          title={title}
        />
      ))}
    </ul>
  );
};

export default MainAdvantages;
