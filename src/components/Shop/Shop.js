import React from 'react';
import {NavLink} from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './shop.css';

function Shop() {

  const categories = [
    { categoryName: "Camisas", route: "categories/camisas", id: 1 },
    { categoryName: "Jeans", route: "categories/jeans", id: 2 },
    { categoryName: "Bermudas", route: "categories/bermudas", id: 3 },
    { categoryName: "Abrigos", route: "categories/abrigos", id: 4 },
    { categoryName: "Gorros", route: "categories/gorros", id: 5 },
]


return (
  <div>
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
                                      background: '#A2D5AB',
                                      borderRadius: 8,
                                      paddingLeft: 6,
                                      paddingRight: 6,
                                      
                                      
                                  }
                                  : {
                                      color: 'black',
                                      background: '#D1DAE3',
                                    
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