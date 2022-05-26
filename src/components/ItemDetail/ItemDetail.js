import './itemDetail.css';


function ItemDetail({ item }) {

    return (
        <div className='ItemDetail-container'>
            <div className='logo'></div>
            <div className='imagenes'>
                <div className='imagenPrincipal'>
                    <img src={item.image} width="50%" />
                </div>
                <div className='imagenSecundaria'>
                    <img src={item.thumbnailOne} width="15%" className='imagenPequeña' />
                    <img src={item.thumbnailTwo} width="15%" className='imagenPequeña' />
                    <img src={item.thumbnailThree} width="15%" className='imagenPequeña' />
                </div>
            </div>
            <div className='texto'>
                <h2 className='titulo'>{item.title}</h2>
                <p className='descripcion'>Descripción: {item.description}</p>
                <h3 className='descripcion'>Talles: {item.size}</h3>
                <h3 className='masDetalles'>Valor: $UY {item.price}</h3>
            </div>
        </div>
    )
}

export default ItemDetail

