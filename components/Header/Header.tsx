"use client";
import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import SideBar from "../SideBar/SideBar";

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
        scrolling
          ? "bg-[#173D33] bg-opacity-50 backdrop-blur-[2px]"
          : ""
      } fixed left-0 right-0 mx-auto py-[10px] transition-colors duration-200`}
    >
      <div className="custom-container flex">
        <div>
          <Logo />
        </div>
        <div className="ml-auto flex items-center">
          <SideBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
