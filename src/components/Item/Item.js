import { NavLink } from 'react-router-dom';
import './item.css';


export default function Item({ id, title, price, image}) {

    return (
        <NavLink to={`item/${id}`} className="a-card" >
            <div className="card text-center">
                <img src={image} className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">${price}</p>
                </div>
            </div>
        </NavLink>
    )
}


