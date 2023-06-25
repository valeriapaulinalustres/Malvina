import { useEffect, useState } from "react";
import Loading from "../Loading/Loading.js";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase.js";
import { collection, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "MalvinaCollection");
    const refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((result) => {
        const product = result.data();
        const productConId = { ...product, id };
        setItem(productConId);
      })
      .catch(() => {
        console.log("error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return <div>{loading ? <Loading /> : <ItemDetail item={item} />}</div>;
}

export default ItemDetailContainer;
