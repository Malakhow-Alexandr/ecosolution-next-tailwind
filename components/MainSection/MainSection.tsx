import MainMeta from "./MainMeta";
import MainAdvantages from "./MainAdvantages/MainAdvantages";

const MainSection = () => {
  return (
    <section id="Main" className="mb-[36px]">
      <div className="custom-container">
        <MainMeta />
        <MainAdvantages />
      </div>
    </section>
  );
};

export default MainSection;
