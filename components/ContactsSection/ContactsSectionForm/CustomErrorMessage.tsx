import { FC, ReactNode } from "react";

interface CustomErrorMessageProps {
  children: string;
}

const CustomErrorMessage: FC<CustomErrorMessageProps> = ({
  children
}) => {
  return (
    <p className="absolute font-text text-[12px] text-[#D28B8B] tracking-[-0.48px] ">
      {children}
    </p>
  );
};

export default CustomErrorMessage;
