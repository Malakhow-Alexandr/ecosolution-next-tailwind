"use client";

import { useState } from "react";
import FaqAccordionItem from "./FaqAccordionItem";
import { faqBd } from "@/bd/faqBd";

type FAQIdentifier = string | number;

const FaqAccordion = () => {
  const [openId, setOpenId] = useState<FAQIdentifier | null>(null);

  const onClick = (id: FAQIdentifier | null) => {
    if (id === openId) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <ul className=" ">
      {faqBd.map(({ id, meta, title }) => (
        <FaqAccordionItem onClick={()=> (onClick(id))} meta={meta} title={title} isOpen={id === openId} key={id}/>
      ))}
    </ul>
  );
};

export default FaqAccordion;
