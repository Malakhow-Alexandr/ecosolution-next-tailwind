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
                className="flex items-center gap-[8px] font-text text-[24px] text-white hover:text-mainElementsColor transition-colors duration-[250ms]"
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
                  <Image
                    src={InstaIcon}
                    alt="this is instagram icon"
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-transform duration-200"
                  />
                ) : (
                  <Image
                    src={FaceBookIcon}
                    alt="this is instagram icon"
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-transform duration-200"
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
