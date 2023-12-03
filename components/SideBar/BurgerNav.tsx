import { FC } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import InstaIcon from "@/public/icons/instagram.svg";
import FaceBookIcon from "@/public/icons/facebook.svg";
import { burgerNav, burgerSocials } from "@/bd/burgerBd";

interface BurgerNavProps {
  closeMenu: () => void;
}

const BurgerNav: FC<BurgerNavProps> = ({ closeMenu }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col mb-auto">
        <ul className="flex flex-col gap-[8px] ">
          {burgerNav.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={`flex items-center gap-[8px] font-text text-[24px] text-[] hover:text-white \
                transition-colors duration-[250ms]
                ${
                  link.title === "Main"
                    ? "text-mainElementsColor"
                    : "text-[#ffffff] text-opacity-25"
                }`}
              >
                {link.title}
                <GoArrowUpRight className="w-[16px] h-[16px]" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex ">
        <ul className="flex flex-row gap-[8px]">
          {burgerSocials.map((link) => (
            <li key={link.title}>
              <a href={link.href} target="_blank">
                {link.title === "Instagram" ? (
                  <InstaIcon
                    width={24}
                    height={24}
                    className="stroke-white hover:stroke-mainElementsColor hover:scale-110 transition-all duration-200"
                  />
                ) : (
                  <FaceBookIcon
                    width={24}
                    height={24}
                    className="stroke-white hover:stroke-mainElementsColor hover:scale-110 transition-all duration-200"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerNav;
