"use client";

import { FC, useRef } from "react";
import MinusIcon from "@/public/faq/minus.svg";
import PlusIcon from "@/public/faq/plus.svg";

type FaqAccordionItemProps = {
  onClick: () => void;
  meta: string;
  title: string;
  isOpen: boolean;
};

const FaqAccordionItem: FC<FaqAccordionItemProps> = ({
  title,
  meta,
  onClick,
  isOpen
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  return (
    <li
      className={`border-t pt-[16px] border-mainElementsColor ${
        isOpen ? "pb-[16px]" : ""
      }`}
    >
      <button
        type="button"
        className="relative w-full pl-[52px] last:mb-0 mb-[16px] font-text text-mainText text-[18px] text-left \
         desktop:text-[24px] tracking-[-0.72.px] desktop:tracking-[-0.96px] cursor-pointer"
        onClick={() => onClick()}
      >
        {isOpen ? (
          <MinusIcon className="accordion-icon stroke-mainText" />
        ) : (
          <PlusIcon className="accordion-icon stroke-mainElementsColor" />
        )}
        {title}
      </button>
      <div
        className={`h-0 overflow-hidden transition-all duration-200 `}
        style={
          isOpen
            ? {
                height:
                  itemRef.current?.scrollHeight ?? "auto"
              }
            : { height: "0px" }
        }
      >
        <div ref={itemRef}>
          <p className="block pl-[52px] font-text text-mainText text-[14px] desktop:text-[16px] desktop:traking-[-0.64px] tracking-[-0.56px]">
            {meta}
          </p>
        </div>
      </div>
    </li>
  );
};

export default FaqAccordionItem;
