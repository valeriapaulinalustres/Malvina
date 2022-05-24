import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';


function NavBar() {
    return (
        <nav className='footer'>
            <div>
                <NavLink to="/" className='seccionesFooter' >HOME</NavLink>
            </div>
            <div>
                <NavLink to="/shop" className='seccionesFooter'>SHOP</NavLink>
                <NavLink to="/shop/categories/remeras" className='shopSeccion'>Remeras</NavLink>
                <NavLink to="/shop/categories/camisas">Camisas</NavLink>
                <NavLink to="/shop/categories/buzos">Buzos</NavLink>
                <NavLink to="/shop/categories/sweaters">Sweaters</NavLink>
                <NavLink to="/shop/categories/bermudas">Bermudas</NavLink>
                <NavLink to="/shop/categories/pantalones">Pantalones</NavLink>
                <NavLink to="/shop/categories/jeans">Jeans</NavLink>
                <NavLink to="/shop/categories/camperas">Camperas</NavLink>
            </div>
            <div>
                <NavLink to="/about" className='seccionesFooter'>ABOUT US</NavLink>
                
            </div>
            <div>
                <NavLink to="/contact" className='seccionesFooter'>CONTACT</NavLink>
                <h2 className='seccionesFooter'>malvinaXXX@mail</h2>
            </div>
        </nav>
    )
}

export default NavBar
