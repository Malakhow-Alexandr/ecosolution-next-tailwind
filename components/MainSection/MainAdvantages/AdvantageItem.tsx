import { FC } from "react";
import { ImageData } from "@/types/types";
import Image from "next/image";
import Line from "@/components/UtilsComponents/Line";
import OpennesIcon from "@/public/advantages/Openness.svg"
import ResponsibilityIcon from "@/public/advantages/Responsibility.svg"
import InnovationIcon from "@/public/advantages/Innovation.svg"
import QualityIcon from "@/public/advantages/Openness.svg"

export interface AdvantageItemProps {
  advantage: string;
  picture: ImageData | null;
  title: string;
}

const AdvantageItem: FC<AdvantageItemProps> = ({
  advantage,
  picture,
  title
}) => {

  return (
    <>
      {!picture ? (
        <li
          className="h-[197px] pt-[17px] px-[12px] pb-[5px] \
         bg-[#EAEDF1]"
        >
          <div className="flex gap-[8px] items-center mb-[33px]">
            {title === "OPENNESS" && <OpennesIcon/>}
            {title === "RESPONSIBILITY" && <ResponsibilityIcon/>}
            {title === "INNOVATION" && <InnovationIcon/>}
            {title === "QUALITY" && <QualityIcon className="w-[16px] h-[16px]"/>}
            <h3 className="font-title text-[16px] leading-[24px] text-mainText ">
              {title}
            </h3>
          </div>
          <Line classNames="mb-[12px]" />
          <p className="font-text text-[14px] text-mainText tracking-[-0.56px]">
            {advantage}
          </p>
        </li>
      ) : (
        <li className="hidden tablet:flex">
          <Image
            src={picture.src}
            alt="In the picture, engineers are carrying out planned work."
          />
        </li>
      )}
    </>
  );
};

export default AdvantageItem;
