import { FC } from "react";
import { FaArrowDown } from "react-icons/fa6";

interface SecondaryButtonProps {
  title: string;
  styles?: string;
}

const SecondaryButton: FC<SecondaryButtonProps> = ({
  title,
  styles
}) => {
  return (
    <a
      href="#ContactsForm"
      className={`button-secondary mx-auto ${
        styles ? `${styles}` : ""
      }`}
    >
      <span>{title}</span>
      <span className="button-secondary-icon">
        <FaArrowDown className="w-[8px] h-[8px] fill-mainText" />
      </span>
    </a>
  );
};

export default SecondaryButton;
