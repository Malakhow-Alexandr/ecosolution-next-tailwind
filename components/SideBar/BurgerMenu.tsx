import { useState, useRef, useEffect } from "react";
import BurgerNav from "./BurgerNav";
import { IoClose } from "react-icons/io5";

interface BurgerMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
  toggle,
  isOpen
}) => {
  const observer = useRef<IntersectionObserver | null>(
    null
  );
  const [activeSection, setActiveSection] = useState<
    string | null
  >(null);

  useEffect(() => {
    const sections = document.querySelectorAll(
      "section[data-section-id]"
    );
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          setActiveSection(
            visibleSection.getAttribute("data-section-id")
          );
        }
      }
    );

    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  return (
    <div className={`${isOpen ? "burger-menu" : "hidden"}`}>
      <button
        onClick={() => toggle()}
        className="w-[60px] h-[20px] flex items-center font-text font-normal \
         text-[16px] text-white tracking-[-0.64px] \
          hover:text-mainElementsColor transition-colors duration-[250ms]"
      >
        <IoClose className="w-[20px] h-[20px]" />
        close
      </button>
      <span className="block border-b-[1px] border-white w-[100%] mt-[6px] mb-[16px]"></span>
      <BurgerNav
        closeMenu={toggle}
        activeSection={activeSection}
      />
    </div>
  );
};

export default BurgerMenu;
