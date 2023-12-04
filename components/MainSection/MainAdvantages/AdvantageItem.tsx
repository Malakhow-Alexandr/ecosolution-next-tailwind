import { FC } from "react";
import Image from "next/image";
import Line from "@/components/UtilsComponents/Line";
import OpennesIcon from "@/public/advantages/Openness.svg";
import ResponsibilityIcon from "@/public/advantages/Responsibility.svg";
import InnovationIcon from "@/public/advantages/Innovation.svg";
import QualityIcon from "@/public/advantages/Openness.svg";
import { StaticImageData } from "next/image";

export interface AdvantageItemProps {
  advantage: string;
  picture: StaticImageData[] | null;
  title: string;
  position?: string;
}

const AdvantageItem: FC<AdvantageItemProps> = ({
  advantage,
  picture,
  title
}) => {
  console.log();
  return (
    <>
      {!picture ? (
        <li
          className="h-[197px] desktop:h-[339px] pt-[17px] px-[12px] pb-[5px] \
         bg-[#EAEDF1] "
        >
          <div className="flex gap-[8px] items-center mb-[33px] tablet:mb-[36px]">
            {title === "OPENNESS" && <OpennesIcon />}
            {title === "RESPONSIBILITY" && (
              <ResponsibilityIcon />
            )}
            {title === "INNOVATION" && <InnovationIcon />}
            {title === "QUALITY" && (
              <QualityIcon className="w-[16px] h-[16px]" />
            )}
            <h3 className="font-title text-[16px] tablet:text-[18px] leading-[24px] text-mainText ">
              {title}
            </h3>
          </div>
          <Line classNames="mb-[12px]" />
          <p className="font-text text-[14px] text-mainText tracking-[-0.56px]">
            {advantage}
          </p>
        </li>
      ) : (
        <li className="hidden tablet:block tablet:col-span-2">
          <Image
            src={picture[0].src}
            alt="In the picture, engineers are carrying out planned work."
            width={picture[0].width}
            height={picture[0].height}
            className="desktop:hidden"
          />
          <Image
            src={picture[1].src}
            alt="In the picture, engineers are carrying out planned work."
            width={picture[1].width}
            height={picture[1].height}
            className="tablet:hidden desktop:block"
          />
        </li>
      )}
    </>
  );
};

export default AdvantageItem;
