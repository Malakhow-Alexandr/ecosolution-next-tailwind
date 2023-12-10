import MainMeta from "./MainMeta";
import MainAdvantages from "./MainAdvantages/MainAdvantages";

const MainSection = () => {
  return (
    <section
      id="About"
      data-section-id="About"
      className="pt-[65px] tablet:pt-[100px] desktop:pt-[120px]"
    >
      <div className="custom-container">
        <MainMeta />
        <MainAdvantages />
      </div>
    </section>
  );
};

export default MainSection;
