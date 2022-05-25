import Item from '../Item/Item.js';
import './itemList.css';

export default function ItemList({ filtered }) {

  return (
    <div className=' card-container'>
      {filtered.map((item, index) => (
        <Item 
          className='cropped'
          key={index}
          title={item.title}
          price={item.price}
          image={item.image}
          id={item.id} />
      ))}
    </div>
  )
}