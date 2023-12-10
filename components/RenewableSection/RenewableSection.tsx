import { IoIosArrowRoundForward } from "react-icons/io";
import Line from "../UtilsComponents/Line";
import RenewableContacts from "./RenewableContacts";

const RenewableSection = () => {
  return (
    <section
      id="Main"
      data-section-id="Main"
      className="pt-[250px] mb-[36px] tablet:mb-[40px] desktop:mb-[36px]"
    >
      <div className="custom-container">
        <div className="tablet:flex tablet:justify-between">
          <h1
            className="tablet:w-[300px] desktop:w-[485px] mb-[24px] font-title font-normal text-[36px] tablet:text-[48px] \
          desktop:text-[64px] text-mainText  leading-[36px] tablet:leading-[48px] desktop:leading-[64px]"
          >
            RENEWABLE ENERGY FOR ANY TASK
          </h1>
          <div className="tablet:w-[342px] desktop:w-[362px] desktop:mr-[96px] tablet:flex tablet:flex-col items-start">
            <p className="font-text text-mainText text-[16px] tracking-[-0.64px] mb-[24px]">
              Development and implementation of renewable
              non-polluting energy sources, generating power
              generation using energy wind, sun, water,
              biomass
            </p>
            <a
              href="#Cases"
              className="button-primary mb-[24px] mx-auto tablet:mr-auto tablet:ml-0 w-[141px] h-[39px] group"
            >
              <span className="group-hover:text-mainElementsColor group-focus:text-mainElementsColor transition-colors duration-200">
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
          </div>
        </div>

        <Line classNames="mb-[36px] tablet:mb-[16px]" />
        <RenewableContacts />
      </div>
    </section>
  );
};

export default RenewableSection;
