import { FC } from "react";

interface FaqTitleProps {
  styles?: string;
}

const FaqTitle: FC<FaqTitleProps> = ({ styles }) => {
  return (
    <h2
      className={`font-title text-[28px] tablet:text-[36px] text-mainText tablet:leading-[36px] leading-[28px] mb-[24px] ${
        styles ? `${styles}` : ""
      }`}
    >
      FREQUENTLY ASKED
      <br /> QUESTIONS
    </h2>
  );
};

export default FaqTitle;
