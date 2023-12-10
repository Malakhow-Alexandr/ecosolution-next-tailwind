import ArrowRight from "@/public/cases/arrow-right.svg";
import ArrowLeft from "@/public/cases/arrow-left.svg";

export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-0 right-0 desktop:right-[22px] desktop:top-[10px] w-[66px] h-[66px] desktop:w-[84px] desktop:h-[84px] \
       flex items-center justify-center \
        border border-mainText rounded-full \
        text-mainText hover:text-mainElementsColor hover:border-mainElementsColor \  transition-colors duration-200 group"
      aria-hidden="true"
      aria-disabled={true}
      onClick={onClick}
      type="button"
      aria-label="slider-next-button"
    >
      <ArrowRight
        aria-label="slider-prev-icon"
        className="w-[36px] h-[36px] stroke-mainText group-hover:stroke-mainElementsColor group-focus:stroke-mainElementsColor transition-colors duration-200"
      />
    </button>
  );
};

export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-0 right-[78px] desktop:right-[115px] desktop:top-[10px] w-[66px] h-[66px] desktop:w-[84px] desktop:h-[84px] \
       flex items-center justify-center \
      border border-mainText rounded-full \
        text-mainText hover:text-mainElementsColor hover:border-mainElementsColor \ 
        transition-colors duration-200 group"
      aria-hidden="true"
      aria-disabled={true}
      onClick={onClick}
      type="button"
      aria-label="slider-prev-button"
    >
      <ArrowLeft
        aria-label="slider-prev-icon"
        className="w-[36px] h-[36px] stroke-mainText group-hover:stroke-mainElementsColor
       group-focus:stroke-mainElementsColor transition-colors duration-200"
      />
    </button>
  );
};
