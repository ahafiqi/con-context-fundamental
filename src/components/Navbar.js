import NavbarLink from "./NavbarLink";
import NavbarUser from "./NavbarUser";

const Navbar = () => {
  return (
    <nav>
      <NavbarLink>Dasboard</NavbarLink> | <NavbarLink>Products</NavbarLink> |
      <NavbarLink>
        <NavbarUser />
      </NavbarLink>
    </nav>
  );
};

export default Navbar;
