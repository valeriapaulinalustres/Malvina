import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';


function NavBar() {
    return (
        <nav className='footer'>
            <div>
                <NavLink to="/">HOME</NavLink>
            </div>
            <div>
                <NavLink to="/shop">SHOP</NavLink>
                <NavLink to="/shop/categories/remeras">Remeras</NavLink>
                <NavLink to="/shop/categories/camisas">Camisas</NavLink>
                <NavLink to="/shop/categories/buzos">Buzos</NavLink>
                <NavLink to="/shop/categories/sweaters">Sweaters</NavLink>
                <NavLink to="/shop/categories/bermudas">Bermudas</NavLink>
                <NavLink to="/shop/categories/pantalones">Pantalones</NavLink>
                <NavLink to="/shop/categories/jeans">Jeans</NavLink>
                <NavLink to="/shop/categories/camperas">Camperas</NavLink>
            </div>
            <div>
                <NavLink to="/about">ABOUT US</NavLink>
                <h2>Quienes somos</h2>
            </div>
            <div>
                <NavLink to="/contact">CONTACT</NavLink>
                <h2>malvinaXXX@mail</h2>
            </div>
        </nav>
    )
}

export default NavBar
