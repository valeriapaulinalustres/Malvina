import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';


function NavBar() {
  return (
    <div>
      <nav>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/shop">SHOP</NavLink>
        <NavLink to="/about">ABOUT US</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>
      <nav>
        <NavLink to="/">
          <h1>MALVINA</h1>
        </NavLink>

      </nav>
    </div>
  )
}

export default NavBar
