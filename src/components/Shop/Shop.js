import React from 'react';
import {NavLink} from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './shop.css';

function Shop() {

  const categories = [
    { categoryName: "Remeras", route: "categories/remeras", id: 1 },
    { categoryName: "Camisas", route: "categories/camisas", id: 2 },
    { categoryName: "Buzos", route: "categories/buzos", id: 3 },
    { categoryName: "Sweaters", route: "categories/sweaters", id: 4 },
    { categoryName: "Bermudas", route: "categories/bermudas", id: 5 },
    { categoryName: "Pantalones", route: "categories/pantalones", id: 6 },
    { categoryName: "Jeans", route: "categories/jeans", id: 7 },
    { categoryName: "Camperas", route: "categories/camperas", id: 8 },
]


  return (
    <div>
       <nav>
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
                                        background: '#A2D5AB',
                                        borderRadius: 8,
                                        paddingLeft: 6,
                                        paddingRight: 6,
                                    }
                                    : {
                                        color: '#39AEA9',
                                        background: '#ffffff'
                                    }
                            }>{element.categoryName}
                        </NavLink>)
                })}
            </nav>
            <ItemListContainer />
    </div>
  )
}

export default Shop