import { NavLink, Link } from "react-router-dom";
import classes from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav className={classes.menu}>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="tests">Tests</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
      {/* <NavLink
        to="#"
        className={({ isActive }) => (isActive ? "color font" : "")}
      >
        Contacts
      </NavLink> */}
      {/* <NavLink
        to="#"
        style={({ isActive }) =>
          isActive ? { color: "red", fontSize: "30px" } : {}
        }
      >
        Contacts
      </NavLink> */}
    </nav>
  );
};

export default Menu;
