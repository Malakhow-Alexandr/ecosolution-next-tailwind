import { FC } from "react";

interface SliderInfoProps {
  currentSlide: number;
  bdLength: number;
}

const SliderInfo: FC<SliderInfoProps> = ({
  currentSlide,
  bdLength
}) => {
  return (
    <div className="absolute tablet:flex top-[40px] left-0">
      <h2 className="hidden relative top-[-40px] tablet:block w-[360px] mr-[8px] border-r border-mainElementsColor font-title text-[36px] text-mainText leading-[36px]">
        SUCCESSFUL CASES OF <br /> OUR COMPANY
      </h2>
      <p className="font-text text-[28px] font-[300] tracking-[-1.12px] ">
        0{currentSlide}
        <span> </span>
        <span className="text-[#173d33] text-opacity-25">
          /0{bdLength}
        </span>
      </p>
    </div>
  );
};

export default SliderInfo;
