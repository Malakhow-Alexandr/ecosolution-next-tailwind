import Image from "next/image";
import LogoIcon from "@/public/logo/Logo.png";
import { FC } from "react";

interface LogoProps {
  containerStyles?: string;
}

const Logo: FC<LogoProps> = ({ containerStyles }) => {
  return (
    <div
      className={`flex items-center h-[40px] ${
        containerStyles ? `${containerStyles}` : ""
      }`}
    >
      <a href="#" className="flex items-center">
        <Image
          src={LogoIcon}
          alt="This is LogoIcon"
          width={269}
          height={40}
          className=""
        />
      </a>
    </div>
  );
};

export default Logo;
