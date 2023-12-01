import React, { ReactNode } from "react";

interface BackdropProps {
  isOpen: boolean;
  children: ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Backdrop: React.FC<BackdropProps> = ({ isOpen, children, onClick }) => {
  return (
    <div
      className={`${
        !isOpen
          ? "opacity-0 pointer-events-none w-full h-full bg-transparent invisible fixed top-0 left-0 transition-all duration-[500ms]"
          : "fixed top-0 left-0 pointer-events-auto visible w-full h-full bg-[#173D33] opacity-100 bg-opacity-25 backdrop-blur-[2px] z-500 transition-opacity duration-[500ms] px-[8px]"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Backdrop;
