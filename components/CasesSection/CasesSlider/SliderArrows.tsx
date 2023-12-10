import ArrowRight from "@/public/cases/arrow-right.svg";
import ArrowLeft from "@/public/cases/arrow-left.svg";

export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-0 right-0 desktop:right-[22px] desktop:top-[10px] w-[66px] h-[66px] desktop:w-[84px] desktop:h-[84px] \
       flex items-center justify-center \
        border border-mainText rounded-full \
        text-mainText hover:focus:text-mainElementsColor hover:focus:border-mainElementsColor \  transition-colors duration-200 group"
      aria-hidden="true"
      aria-disabled={true}
      onClick={onClick}
      type="button"
    >
      <ArrowRight className="w-[36px] h-[36px] stroke-mainText group-hover:focus:stroke-mainElementsColor" />
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
        text-mainText hover:focus:text-mainElementsColor hover:focus:border-mainElementsColor \ 
        transition-colors duration-200 group"
      aria-hidden="true"
      aria-disabled={true}
      onClick={onClick}
      type="button"
    >
      <ArrowLeft className="w-[36px] h-[36px] stroke-mainText group-hover:focus:stroke-mainElementsColor" />
    </button>
  );
};
