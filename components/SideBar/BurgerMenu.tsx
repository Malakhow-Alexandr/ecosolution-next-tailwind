import React from "react";
import BurgerNav from "./BurgerNav";
import { IoClose } from "react-icons/io5";

interface BurgerMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ toggle, isOpen }) => {
  return (
    <div
      className={`${
        isOpen
          ? "flex flex-col max-w-[480px] h-[88%]  mx-auto mt-[36px] bg-[#173d33] bg-opacity-75 rounded-[25px] p-[24px] "
          : "hidden"
      }`}
    >
      <button
        onClick={() => toggle()}
        className="w-[60px] h-[20px] flex items-center font-text text-[16px] font-normal text-white tracking-[-0.64px] hover:text-mainElementsColor transition-colors duration-[250ms]"
      >
        <IoClose className="w-[20px] h-[20px]" />
        close
      </button>
      <span className="block border-b-[1px] border-white w-[100%] mt-[6px] mb-[16px]"></span>
      <BurgerNav />
    </div>
  );
};

export default BurgerMenu;
