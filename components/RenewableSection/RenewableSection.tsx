import { IoIosArrowRoundForward } from "react-icons/io";
import Line from "../UtilsComponents/Line";
import RenewableContacts from "./RenewableContacts";

const RenewableSection = () => {
  return (
    <section className="pt-[250px] mb-[30px]">
      <div className="custom-container">
        <h1 className="text-[36px] font-title font-normal text-mainText mb-[24px] leading-[36px]">
          RENEWABLE ENERGY FOR ANY TASK
        </h1>
        <p className="font-text text-mainText text-[16px] tracking-[-0.64px] mb-[24px]">
          Development and implementation of renewable
          non-polluting energy sources, generating power
          generation using energy wind, sun, water, biomass
        </p>
        <a
          href="#Cases"
          className="button-primary mb-[24px] w-[141px] h-[39px] group"
        >
          <span className="group-hover:text-mainElementsColor transition-colors duration-200">
            Learn more
          </span>
          <span
            className="flex w-[32px] ml-auto h-[32px] rounded-full \
           bg-mainElementsColor items-center justify-center"
          >
            <IoIosArrowRoundForward
              width="16"
              height="16"
              className="w-[16px] h-[16px]"
            />
          </span>
        </a>
        <Line classNames="mb-[36px]" />
        <RenewableContacts />
      </div>
    </section>
  );
};

export default RenewableSection;
