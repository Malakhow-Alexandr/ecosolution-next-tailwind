"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface BackdropProps {
  isOpen: boolean;
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Backdrop: React.FC<BackdropProps> = ({ isOpen, children, onClick }) => {
  const [backdropElement, setBackdropElement] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("backdrop-root");
      setBackdropElement(element);
    }
  }, []);

  if (!backdropElement) {
    return null;
  }

  return createPortal(
    <div
      className={`${
        !isOpen
          ? "fixed top-0 left-0 opacity-0 pointer-events-none w-full h-full bg-transparent invisible transition-all duration-[500ms]"
          : "fixed top-0 left-0 pointer-events-auto visible w-full h-full bg-[#173D33] opacity-100 bg-opacity-25 backdrop-blur-[2px] z-50 transition-opacity duration-[500ms] px-[8px]"
      }`}
      onClick={onClick}
    >
      {children}
    </div>,
    backdropElement
  );
};

export default Backdrop;
