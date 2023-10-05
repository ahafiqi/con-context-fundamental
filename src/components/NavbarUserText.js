import { useContext } from "react";
import { AppContext } from "../context/app-context";

const NavbarUserText = () => {
  const context = useContext(AppContext) 
  
  return <span>Hi, User! {context.user.name}</span>;
};

export default NavbarUserText;
