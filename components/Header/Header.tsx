"use client";
import React, { useState, useEffect } from "react";

import { Logo } from "../Logo/NewLogo";
import SideBar from "../SideBar/SideBar";
import SecondaryButton from "../UtilsComponents/SecondaryButton";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling ? "bg-[#fff]  backdrop-blur-[2px]" : ""
      } fixed left-0 right-0 mx-auto py-[10px] transition-colors duration-200 z-[10]`}
    >
      <div className="custom-container flex">
        <div>
          <Logo active={scrolling} />
        </div>
        <div className="ml-auto flex items-center tablet:gap-[12px]">
          <SideBar />
          <SecondaryButton
            title="Get in touch"
            styles="group hidden tablet:flex w-[140px] h-[40px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
