import { FaArrowDown } from "react-icons/fa6";
import FaqAccordion from "./FaqAccordion/FaqAccordion";

const FaqSection = () => {
  return (
    <section id="FAQ" className="mb-[36px]">
      <div className="custom-container">
        <h2 className="font-title text-[28px] text-mainText leading-[28px] mb-[24px]">
          FREQUENTLY ASKED
          <br /> QUESTIONS
        </h2>
        <FaqAccordion />
        <div>
          <p className="mb-[12px] font-text text-[18px] text-mainText text-center tracking-[-0.72px]">
            Didn&apos;t find the answer to your question?
          </p>
          <a
            href="#ContactsForm"
            className="button-secondary group w-[130px] h-[40px] mx-auto"
          >
            <span>Contact Us</span>
            <span className="button-secondary-icon">
              <FaArrowDown className="w-[8px] h-[8px] fill-mainText" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
