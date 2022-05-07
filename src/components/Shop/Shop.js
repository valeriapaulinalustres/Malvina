import React from 'react';
import {NavLink} from 'react-router-dom';

function Shop() {

  const categories = [
    { categoryName: "Interior", route: "categories/interior", id: 1 },
    { categoryName: "Anuales", route: "categories/anuales", id: 2 },
    { categoryName: "Perennes", route: "categories/perennes", id: 3 },
    { categoryName: "Cactus", route: "categories/cactus", id: 4 }
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
    </div>
  )
}

export default Shop