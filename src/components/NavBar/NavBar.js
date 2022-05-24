import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';


function NavBar() {
  return (
    <div className= 'navBar' >
      
      <nav className= 'opcionesMenu'>
        <NavLink to="/" className= 'opcionesMenuSeccion'>HOME</NavLink>
        <NavLink to="/shop" className= 'opcionesMenuSeccion'>SHOP</NavLink>
        <NavLink to="/about" className= 'opcionesMenuSeccion'>ABOUT US</NavLink>
        <NavLink to="/contact" className= 'opcionesMenuSeccion'>CONTACT</NavLink>        

      </nav>
      
      

      

    </div>
  )
}

export default NavBar
