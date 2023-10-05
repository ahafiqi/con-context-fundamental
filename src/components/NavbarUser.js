import { useContext } from "react";
import NavbarUserAvatar from "./NavbarUserAvatar";
import NavbarUserText from "./NavbarUserText"
import { AppContext } from "../context/app-context";

const NavbarUser = () => {
  const context = useContext(AppContext);

  return (
    <div>
      <NavbarUserAvatar />
      <NavbarUserText />
    </div>
  );
};

export default NavbarUser;
