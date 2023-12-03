import FaqAccordion from "./FaqAccordion/FaqAccordion";

const FaqSection = () => {
  return (
    <section id="FAQ">
      <div className="custom-container">
        <h2 className="font-title text-[28px] text-mainText leading-[28px] mb-[24px]">
          FREQUENTLY ASKED
          <br /> QUESTIONS
        </h2>
        <FaqAccordion />
        <div>
          <p>
            Didn&apos;t find the answer to your question?
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
