import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import { gsap } from "gsap";

function NavBar() {
  const mouseEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#f4e04d" });
  };
  const mouseLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#ffffff" });
  };

  const styleLinks = ({ isActive }) =>
    isActive
      ? {
          color: "#000000",
          background: "#f4e04d",
          borderRadius: 8,
          paddingLeft: 6,
          paddingRight: 6,
        }
      : {
          color: "#fff",
        };

  return (
    <div className="navBar">
      <nav className="opcionesMenu">
        <NavLink
          to="/"
          className="opcionesMenuSeccion"
          style={styleLinks}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          HOME
        </NavLink>
        <NavLink
          to="/shop"
          className="opcionesMenuSeccion"
          style={styleLinks}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          SHOP
        </NavLink>
        <NavLink
          to="/about"
          className="opcionesMenuSeccion"
          style={styleLinks}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          ABOUT US
        </NavLink>
        <NavLink
          to="/contact"
          className="opcionesMenuSeccion"
          style={styleLinks}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          CONTACT
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
