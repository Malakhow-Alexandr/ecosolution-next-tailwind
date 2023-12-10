"use client";

import React, { FC } from "react";
import { GoArrowUp as ArrowIcon } from "react-icons/go";

interface LinkToTopProps {
  styles: string;
}
const LinkToTop: FC<LinkToTopProps> = ({ styles }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      aria-label="scroll to top"
      className={`relative bottom-[-3px] flex items-center justify-center \ 
        w-[25px] mobile:w-[32px] h-[25px] mobile:h-[32px] rounded-full bg-mainElementsColor text-mainText cursor-pointer \ 
        hover:scale-110 hover:bg-mainText focus:bg-mainText hover:text-mainElementsColor focus:text-mainElementsColor \ 
        transition-all ${styles ? `${styles}` : ""}\
        `}
    >
      <ArrowIcon className="w-[10px] mobile:w-[16px] h-[10px] mobile:h-[16px] transition-all duration-[10ms]" />
    </a>
  );
};

export default LinkToTop;
