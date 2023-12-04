import SecondaryButton from "../UtilsComponents/SecondaryButton";
import FaqAccordion from "./FaqAccordion/FaqAccordion";
import FaqTitle from "./FaqTitle";

const FaqSection = () => {
  return (
    <section
      id="FAQ"
      className="mb-[36px] tablet:mb-[100px]"
    >
      <div className="custom-container tablet:flex tablet:gap-[24px] desktop:gap-[185px]">
        <FaqTitle styles="tablet:hidden" />
        <FaqAccordion />
        <div className="tablet:flex flex-col justify-between">
          <FaqTitle styles="hidden tablet:block" />
          <div>
            <p
              className="mb-[12px] font-text text-[18px] desktop:text-[24px] \
             text-mainText text-center tracking-[-0.72px] desktop:tracking-[-0.96px]"
            >
              Didn&apos;t find the answer to your question?
            </p>
            <SecondaryButton
              title="Contact Us"
              styles="w-[130px] h-[40px] tablet:mb-[16px] group"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
