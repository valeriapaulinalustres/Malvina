import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../../components/Loading/Loading"

function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams()



const generalTitle = "Catálogo de Productos";


  return (
    <div>
      <h2>{generalTitle}: {categoryId}</h2>
                {loading
                    ? (<Loading />)
                    : (<ItemList filtered={products} />)
                }
    </div>
  )
}

export default ItemListContainer