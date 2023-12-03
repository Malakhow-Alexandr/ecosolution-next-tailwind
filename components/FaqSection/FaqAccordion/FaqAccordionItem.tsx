"use client";

import { FC, useRef } from "react";
import MinusIcon from "@/public/faq/minus.svg";
import PlusIcon from "@/public/faq/plus.svg";

type FaqAccordionItemProps = {
  onClick: () => void;
  meta: string; // Замените на фактический тип мета-данных
  title: string; // Замените на фактический тип заголовка
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
    <li className="border-t border-b last:border-b-0 py-[16px] border-mainElementsColor">
      <button
        type="button"
        className="relative w-full pl-[52px] font-text text-[18px] text-left tracking-[-0.72.px] cursor-pointer"
        onClick={() => onClick()}
      >{isOpen ? <MinusIcon className="accordion-icon stroke-mainText"/>: <PlusIcon className="accordion-icon stroke-mainElementsColor"/>}
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
        <div className="mt-[16px]" ref={itemRef}>
          <p className="block pl-[52px]">{meta}</p>
        </div>
      </div>
    </li>
  );
};

export default FaqAccordionItem;
