import { IoIosArrowRoundForward } from "react-icons/io";

const RenewableSection = () => {
  return (
    <section className="pt-[250px] mb-[30px]">
      <div className="custom-container">
        <h1 className="text-[36px] font-title font-normal text-mainText mb-[24px] leading-[36px]">
          RENEWABLE ENERGY FOR ANY TASK
        </h1>
        <p className="font-text text-mainText text-[16px] tracking-[-0.64px] mb-[24px]">
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
        <a
          href="#Cases"
          className="flex items-center w-[141px] h-[39px] mx-auto p-[4px] pl-[16px] border-[1px] border-mainElementsColor rounded-[500px] text-mainText font-text text-[16px] tracking-[-0.64px] leading-[18px] hover:scale-110 transition-transform duration-200 mb-[24px]"
        >
          Learn more
          <span className="flex w-[32px] ml-auto h-[32px] rounded-full bg-mainElementsColor items-center justify-center">
            <IoIosArrowRoundForward
              width="16"
              height="16"
              className="w-[16px] h-[16px]"
            />
          </span>
        </a>
        <span className="block w-full h-[1px] bg-mainElementsColor mb-[24px]"></span>
        <address className="font-text not-italic text-[16px] tracking-[-0.64px] text-mainText text-center mb-[8px]">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </address>
        <div className="flex items-center justify-center">
          <a
            href="mailto:office@ecosolution.com"
            className="font-text text-[16px] tracking-[-0.64px] text-mainText"
          >
            office@ecosolution.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default RenewableSection;
