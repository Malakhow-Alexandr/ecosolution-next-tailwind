import { FC, ReactNode } from "react";

interface CustomErrorMessageProps {
  children: string;
  styles?: string;
}

const CustomErrorMessage: FC<CustomErrorMessageProps> = ({
  styles,
  children
}) => {
  return (
    <p
      className={`absolute bottom-[-20px] right-0 font-text text-[12px] text-[#D28B8B] tracking-[-0.48px] ${
        styles ? `${styles}` : ""
      }`}
    >
      {children}
    </p>
  );
};

export default CustomErrorMessage;
