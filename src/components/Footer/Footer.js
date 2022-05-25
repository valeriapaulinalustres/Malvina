import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';


function NavBar() {
    return (
        <nav className='footer'>
            <div className='seccionesFooter'>
                <NavLink to="/" className='seccionesFooterLink' >HOME</NavLink>
            </div>
            <div className='seccionesFooter'>
                <NavLink to="/shop" className='seccionesFooterLink'>SHOP</NavLink>
                <NavLink to="/shop/categories/camisas" className='seccionShop'>Camisas</NavLink>
                <NavLink to="/shop/categories/jeans" className='seccionShop'>Jeans</NavLink>
                <NavLink to="/shop/categories/bermudas" className='seccionShop'>Bermudas</NavLink>
                <NavLink to="/shop/categories/abrigos" className='seccionShop'>Abrigos</NavLink>
                <NavLink to="/shop/categories/gorros" className='seccionShop'>Gorros</NavLink>
            </div>
            <div className='seccionesFooter'>
                <NavLink to="/about" className='seccionesFooterLink'>ABOUT US</NavLink>
            </div>    
            <div className='seccionesFooter'>
                <NavLink to="/contact" className='seccionesFooterLink'>CONTACT</NavLink>
                <h2 className='seccionShop'>malvinaXXX@mail</h2>
            </div>

            <div className='seccionesFooter'>
                <NavLink to="/" className='malvina'> MALVINA </NavLink>
            </div>
        </nav>
    )
}

export default NavBar
