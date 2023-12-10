import React from "react";

const RenewableContacts = () => {
  return (
    <div className="tablet:flex">
      <address
        className="font-text not-italic text-[16px] tracking-[-0.64px] \
         text-mainText text-center mb-[8px] tablet:mb-o"
      >
        79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
      </address>

      <a
        href="mailto:office@ecosolution.com"
        className="block w-[163px] mx-auto desktop:ml-[493px] font-text text-[16px] \
        tracking-[-0.64px] text-mainText hover:text-mainElementsColor focus:text-mainElementsColor transition-colors duration-200"
      >
        office@ecosolution.com
      </a>
      <p className="hidden tablet:block font-text text-[16px] text-mainText tracking-[-0.64px]">
        ecosolution © 2023
      </p>
    </div>
  );
};

export default RenewableContacts;
