"use client";

import React, { FC, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowUpRight } from "react-icons/go";
import ArrowRight from "@/public/cases/arrow-right.svg"
import ArrowLeft from "@/public/cases/arrow-left.svg"
import { sliderItemsBd } from "@/bd/sliderBd";
import Line from "@/components/UtilsComponents/Line";

const NextArrow = (props: any) => {
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
      <ArrowRight className="w-[36px] h-[36px] stroke-mainText group-hover:stroke-mainElementsColor"/>
    </button>
  );
};

const PrevArrow = (props: any) => {
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

const CasesSlider: FC = () => {
  const [curentSlide, setCurrentSlide] = useState(1);
  const CasesSlider = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    focusOnSelect: true,
    speed: 800,
    adaptiveHeight: false,
    autoplay: false,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ],
    afterChange: (index: number) =>
      setCurrentSlide(index + 1),

    appendDots: (dots: any) => <ul className="hidden"></ul>
  };
  return (
    <div className="relative max-w-[400px] mx-auto">
      <div className="absolute top-[42px] left-0">
        <p className="font-text text-[28px] font-[300] tracking-[-1.12px] ">
          0{curentSlide}
          <span> </span>
          <span className="text-[#173d33] text-opacity-25">
            /0{sliderItemsBd.length}
          </span>
        </p>
      </div>
      <Slider
        className="pt-[100px]
            mx-auto"
        {...settings}
      >
        {sliderItemsBd.map((sliderItem) => {
          return (
            <div key={sliderItem.id} className="">
              <Image
                src={sliderItem.picture.src}
                alt="This is a photo of our project location!"
                width={596}
                height={296}
                className=""
              />
              <div className="px-[12px] pt-[14px] pb-[12px] bg-[#EAEDF1]">
                <div className="">
                  <a
                    href={sliderItem.mapLink}
                    className="flex items-center slider-icon-linc group"
                  >
                    <span className="block w-[175px] font-text text-mainText text-[18px] tracking-[-0.72px]">
                      {sliderItem.mapLinkTitle}
                    </span>
                    <span
                      className="icon-link flex items-center justify-center w-[60px] h-[60px] ml-auto  \
                   bg-mainElementsColor rounded-full \
                   group-hover:bg-mainText transition-colors duration-200"
                    >
                      <GoArrowUpRight
                        className="w-[24px] h-[24px] text-[#173D33] group-hover:text-mainElementsColor \
                       transition-colors duration-200"
                      />
                    </span>
                  </a>
                </div>
                <Line
                  classNames={` ${
                    sliderItem.id === 1 ||
                    sliderItem.id === 4
                      ? "mt-[14px]"
                      : "mt-[34px]"
                  } mb-[12px]`}
                />
                <div className="flex justify-between">
                  <p className="font-text text-mainText text-[14px] tracking-[-0.56px]">
                    {sliderItem.title}
                  </p>
                  <p className="font-text text-mainText text-[14px] tracking-[-0.56px]">
                    {sliderItem.expirationDate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default React.memo(CasesSlider);
