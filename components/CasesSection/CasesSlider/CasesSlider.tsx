"use client";
import React, { FC, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./SliderArrows";
import { sliderItemsBd } from "@/bd/sliderBd";
import SliderInfo from "./SliderInfo";
import SliderCardMeta from "./SliderCardMeta";

const CasesSlider: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const CasesSliderRef = useRef<Slider | null>(null);

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
      <SliderInfo
        bdLength={sliderItemsBd.length}
        currentSlide={currentSlide}
      />
      <Slider
        ref={(slider) => (CasesSliderRef.current = slider)}
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
              <SliderCardMeta
                expirationDate={sliderItem.expirationDate}
                id={sliderItem.id}
                mapLink={sliderItem.mapLink}
                mapLinkTitle={sliderItem.mapLinkTitle}
                title={sliderItem.title}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default React.memo(CasesSlider);
