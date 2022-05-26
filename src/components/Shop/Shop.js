import React from 'react';
import { NavLink } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './shop.css';
import { gsap } from 'gsap'

function Shop() {

  const categories = [
    { categoryName: "Camisas", route: "categories/camisas", id: 1 },
    { categoryName: "Jeans", route: "categories/jeans", id: 2 },
    { categoryName: "Bermudas", route: "categories/bermudas", id: 3 },
    { categoryName: "Abrigos", route: "categories/abrigos", id: 4 },
    { categoryName: "Gorros", route: "categories/gorros", id: 5 },

  ]
  const mouseEnterShop = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#f4e04d" });
  };
  const mouseLeaveShop = ({ currentTarget }) => {
    gsap.to(currentTarget, { color: "#7b6b6f" });
  };


  return (
    <div>
      <div className='logo'></div>
      <nav className='containerNavBar'>
        {categories.map((element, index) => {
          return (
            <NavLink
              to={element.route}
              className="navbar-link"
              key={index}
              style={({ isActive }) =>
                isActive
                  ? {
                    color: '#fff',
                    background: '#d1dae3',
                    borderRadius: 8,
                    paddingLeft: 6,
                    paddingRight: 6,
                  }
                  : {
                    color: '#7b6b6f',
                    background: '#ffffff'
                  }
              }
              onMouseEnter={mouseEnterShop}
              onMouseLeave={mouseLeaveShop}
            >{element.categoryName}
            </NavLink>)
        })}
      </nav>
      <ItemListContainer />
    </div>
  )
}

export default Shop