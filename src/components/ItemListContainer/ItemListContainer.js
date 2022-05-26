import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loading/Loading";
import ItemList from "../ItemList/ItemList";
import { db } from "../firebase/firebase.js";
import { getDocs, collection, query, where } from "firebase/firestore";
import './ItemListContainer';


function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();


  useEffect(() => {
    const productsCollection = collection(db, "MalvinaCollection");
    const q = categoryId !== undefined ? query(productsCollection, where("category", "==", categoryId)) : productsCollection;
    getDocs(q)
      .then((result) => {
        const docs = result.docs
        const lista = docs.map(producto => {
          const id = producto.id;
          const product = {
            id,
            ...producto.data()
          }
          return product;
        })
        setProducts(lista)
      })
      .catch(() => {
        console.log("error")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId]);


  return (
    <div className='container'>
      {loading
        ? (<Loading />)
        : (<ItemList filtered={products} />)
      }
    </div>
  )
}

export default ItemListContainer
