import CasesSlider from "./CasesSlider/CasesSlider";

const CasesSection = () => {
  return (
    <section
      id="Cases"
      data-section-id="Cases"
      className="mb-[36px] tablet:mb-[100px]"
    >
      <div className="custom-container">
        <div>
          <h2 className="font-title tablet:hidden text-[28px] text-mainText leading-[28px] mb-[24px]">
            SUCCESSFUL CASES OF <br /> OUR COMPANY
          </h2>
          <CasesSlider />
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
