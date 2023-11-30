"use client";
import React, { useState, useEffect } from "react";
import BurgerButton from "./BurgerButton";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEscapeKey = (event: Event): void => {
    if (event instanceof KeyboardEvent && event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <>
      <BurgerButton toggle={() => setIsOpen(!isOpen)} />
      <div
        className={`${
          !isOpen
            ? "opacity-0 pointer-events-none w-full h-full bg-transparent invisible fixed top-0 left-0 transition-all duration-[500ms]"
            : "fixed top-0 left-0 pointer-events-auto visible w-full h-full bg-[#173D33] opacity-100 bg-opacity-25 backdrop-blur-[2px] z-500 transition-opacity duration-[500ms]"
        }`}
      >
        <div
          className={`${
            isOpen
              ? "flex flex-col w-[320px] mx-auto mt-[36px] bg-[#173d33] bg-opacity-75 rounded-[25px] p-[24px] "
              : "hidden"
          }`}
        >
          <button onClick={() => setIsOpen(false)}> close</button>
          <ul className="flex flex-col">
            <li>
              <a href="">Main</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Service</a>
            </li>
            <li>
              <a href="">Cases</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Customers</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>

            <ul className="flex flex-row mt-[200px]">
              <li>
                <a href="">Insta</a>
              </li>
              <li>
                <a href="">face</a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
