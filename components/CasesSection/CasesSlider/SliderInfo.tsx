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
    <div className="absolute top-[40px] left-0">
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
