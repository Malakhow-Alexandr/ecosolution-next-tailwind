"use client";

import React, { FC, useRef, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowUpRight } from "react-icons/go";
import { sliderItemsBd } from "@/bd/sliderBd";
import Line from "@/components/UtilsComponents/Line";

const NextArrow = (props: any) => {
  return (
    <div
      className="hidden"
      aria-hidden="true"
      aria-disabled={true}
    ></div>
  );
};

const PrevArrow = (props: any) => {
  return (
    <div
      className="hidden"
      aria-hidden="true"
      aria-disabled={true}
    ></div>
  );
};

const CasesSlider: FC = () => {
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
    autoplay: true,
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
    appendDots: (dots: any) => <ul className="hidden"></ul>
  };
  return (
    <Slider
      className="max-w-[400px]
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
              className="mb-[24px]"
            />
            <div className="px-[12px]">
              <div className="mb-[16px] ">
                <a
                  href={sliderItem.mapLink}
                  className="flex"
                >
                  <span className="block w-[175px]">
                    {sliderItem.mapLinkTitle}
                  </span>
                  <span className="flex items-center justify-center w-[60px] h-[60px] ml-auto bg-mainElementsColor rounded-full ">
                    <GoArrowUpRight className="w-[24px] h-[24px] text-[#173D33]" />
                  </span>
                </a>
              </div>
              <Line classNames="mb-[12px]" />
              <div className="">
                <p>{sliderItem.title}</p>
                <p>{sliderItem.expirationDate}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default React.memo(CasesSlider);
