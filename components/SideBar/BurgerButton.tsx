import { RxHamburgerMenu } from "react-icons/rx";

interface BurgerButtonProps {
  toggle: () => void;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ toggle }) => {
  return (
    <button
      onClick={toggle}
      className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#DCEFD8] hover:scale-105 hover:bg-mainElementsColor transition"
    >
      <RxHamburgerMenu className="w-[16px] h-[16px]" />
    </button>
  );
};

export default BurgerButton;
