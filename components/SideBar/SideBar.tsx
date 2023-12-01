"use client";
import React, { useState, useEffect } from "react";
import BurgerButton from "./BurgerButton";
import Backdrop from "../Backdrop/Backdrop";
import BurgerMenu from "./BurgerMenu";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEscapeKey = (event: Event): void => {
    if (event instanceof KeyboardEvent && event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
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
      <Backdrop isOpen={isOpen} onClick={handleBackdropClick}>
        <BurgerMenu toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </Backdrop>
    </>
  );
};

export default SideBar;
