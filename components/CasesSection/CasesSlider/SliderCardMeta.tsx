import { FC } from "react";
import Line from "@/components/UtilsComponents/Line";
import { GoArrowUpRight } from "react-icons/go";

interface SliderCardMEtaProps {
  mapLink: string;
  mapLinkTitle: string;
  id: number;
  title: string;
  expirationDate: string;
}

const SliderCardMeta: FC<SliderCardMEtaProps> = ({
  mapLink,
  mapLinkTitle,
  id,
  title,
  expirationDate
}) => {
  return (
    <div className="px-[12px] pt-[14px] pb-[12px] bg-[#EAEDF1]">
      <div>
        <a
          href={mapLink}
          className="flex items-center slider-icon-linc group"
        >
          <span className="block w-[175px] font-text text-mainText text-[18px] tracking-[-0.72px]">
            {mapLinkTitle}
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
          id === 1 || id === 4 ? "mt-[14px]" : "mt-[35px]"
        } mb-[12px]`}
      />
      <div className="flex justify-between">
        <p className="font-text text-mainText text-[14px] tracking-[-0.56px]">
          {title}
        </p>
        <p className="font-text text-mainText text-[14px] tracking-[-0.56px]">
          {expirationDate}
        </p>
      </div>
    </div>
  );
};

export default SliderCardMeta;
