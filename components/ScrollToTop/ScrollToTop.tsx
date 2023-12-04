import React, { FC } from "react";
import { GoArrowUp as ArrowIcon } from "react-icons/go";

type Props = {
  scrollVisible: boolean;
};

const ScrollToTop: FC<Props> = ({ scrollVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-[10%] right-[18px] tablet:right-[3.5%] desktop:right-[10%] flex items-center justify-center \ 
        w-[32px] h-[32px] rounded-full bg-mainElementsColor text-mainText cursor-pointer \ 
        hover:scale-110 hover:bg-mainText hover:text-mainElementsColor \ 
        transition-all \
        ${
          scrollVisible
            ? "opacity-100 pointer-events-auto scale-100 z-[100] transition-all duration-200"
            : "opacity-0 scale-50"
        }`}
      >
        <ArrowIcon className="w-[16px] h-[16px] transition-all duration-[10ms]" />
      </button>
    </>
  );
};

export default ScrollToTop;
