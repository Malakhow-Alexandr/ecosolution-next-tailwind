import { FC } from "react";
import { ImageData } from "@/types/types";
import Image from "next/image";
import Line from "@/components/UtilsComponents/Line";

export interface AdvantageItemProps {
  advantage: string;
  icon: ImageData;
  picture: ImageData | null;
  title: string;
}

const AdvantageItem: FC<AdvantageItemProps> = ({
  advantage,
  icon,
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
          <div className="flex gap-[8px] mb-[33px]">
            <Image
              src={icon.src}
              alt="This is Advantage Icon"
              width={16}
              height={16}
            />
            <h3 className="font-title text-[16px] leading-[24px] text-mainText ">
              {title}
            </h3>
          </div>
          <Line marginBottom={12} />
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
