import MainMeta from "./MainMeta";
import MainAdvantages from "./MainAdvantages/MainAdvantages";

const MainSection = () => {
  return (
    <section
      id="About"
      data-section-id="About"
      className="mb-[36px] tablet:mb-[100px] desktop:mb-[120px]"
    >
      <div className="custom-container">
        <MainMeta />
        <MainAdvantages />
      </div>
    </section>
  );
};

export default MainSection;
