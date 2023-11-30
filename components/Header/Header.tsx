import Logo from "../Logo/Logo";
import SideBar from "../SideBar/SideBar";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 mx-auto">
      <div className="custom-container flex">
        <div>
          <Logo />
        </div>
        <div className="ml-auto">
          <SideBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
