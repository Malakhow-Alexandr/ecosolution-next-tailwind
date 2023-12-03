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
      transition-all duration-200"
    >
      <RxHamburgerMenu className="w-[16px] h-[16px]" />
    </button>
  );
};

export default BurgerButton;
