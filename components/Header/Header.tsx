import Logo from "../Logo/Logo";
import SideBar from "../SideBar/SideBar";

const Header = () => {
  return (
    <header>
      <div className="custom-container flex">
        <div>
          <Logo />
        </div>
        <div>
          <SideBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
