import { FC } from "react";

interface FaqTitleProps {
  styles?: string;
}

const FaqTitle: FC<FaqTitleProps> = ({ styles }) => {
  return (
    <h2
      className={`font-title text-[28px] tablet:text-[36px] desktop:text-[48px] text-mainText leading-[28px] \
      tablet:leading-[36px] desktop:leading-[48px] mb-[24px] ${
        styles ? `${styles}` : ""
      }`}
    >
      FREQUENTLY ASKED
      <br /> QUESTIONS
    </h2>
  );
};

export default FaqTitle;
