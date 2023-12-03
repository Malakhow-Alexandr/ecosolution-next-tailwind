import ArrowRight from "@/public/cases/arrow-right.svg";
import ArrowLeft from "@/public/cases/arrow-left.svg";

export const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-0 right-0 w-[66px] h-[66px] \
       flex items-center justify-center \
        border border-mainText rounded-full \
        text-mainText hover:text-mainElementsColor hover:border-mainElementsColor \ 
        transition-colors duration-200 group"
      aria-hidden="true"
      aria-disabled={true}
      onClick={onClick}
      type="button"
    >
      <ArrowRight className="w-[36px] h-[36px] stroke-mainText group-hover:stroke-mainElementsColor" />
    </button>
  );
};

export const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-0 right-[78px] w-[66px] h-[66px] \
       flex items-center justify-center \
      border border-mainText rounded-full \
        text-mainText hover:text-mainElementsColor hover:border-mainElementsColor \ 
        transition-colors duration-200 group"
      aria-hidden="true"
      aria-disabled={true}
      onClick={onClick}
      type="button"
    >
      <ArrowLeft className="w-[36px] h-[36px] stroke-mainText group-hover:stroke-mainElementsColor" />
    </button>
  );
};
