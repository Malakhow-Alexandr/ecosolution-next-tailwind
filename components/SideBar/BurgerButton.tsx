import { RxHamburgerMenu } from "react-icons/rx";

interface BurgerButtonProps {
  toggle: () => void;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({
  toggle
}) => {
  return (
    <button
      onClick={toggle}
      className="w-[30px] h-[30px] mobile:w-[40px] mobile:h-[40px] \ 
      rounded-full flex items-center justify-center \ 
      bg-[#DCEFD8] hover:scale-105 hover:bg-mainElementsColor \
      focus:scale-105 focus:bg-mainElementsColor transition-all duration-200"
      aria-label="burger-open-button"
    >
      <RxHamburgerMenu
        className="w-[16px] h-[16px]"
        aria-label="burger-open-icon"
      />
    </button>
  );
};

export default BurgerButton;
