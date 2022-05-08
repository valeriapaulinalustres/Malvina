import './itemDetail.css';
import { NavLink } from 'react-router-dom';


function ItemDetail({ item }) {

    return (
        <div>
            <div>
                <img src={item.image} width="100%" />
            </div>
            <div>
                <img src={item.thumbnailOne} width="30%" />
                <img src={item.thumbnailTwo} width="30%" />
                <img src={item.thumbnailThree} width="30%" />
            </div>
            <div>
                <h2>{item.title}</h2>
                <p>Descripción: {item.description}</p>
                <h3>Talles: {item.size}</h3>
                <h3>Precio: ${item.price}</h3>
            </div>
        </div>
    )
}

export default ItemDetail

