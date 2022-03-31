import ItemList from "./ItemList"
import { db } from "./Firebase";
import { useState, useEffect } from "react"
import { toast } from "react-toastify";
import { useParams } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import { query, where, getDocs, collection } from "firebase/firestore";


const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    const { game } = useParams();

    useEffect(() => {
        setLoading(true);
        if (game !== undefined) {
            const filteredDocuments = getDocs(query(collection(db, "products"), where("game", "==", game)));
            filteredDocuments.then((snapshot) => {
                setProducts(snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                })));
            })
                .catch((rej) => {
                    toast.error("Error when trying to load the products");
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        } else {
            const documents = getDocs(collection(db, "products"));
            documents.then((snapshot) => {
                setProducts(snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                })));
            })
                .catch((rej) => {
                    toast.error("Error when trying to load the products");
                    setError(true);
                }
                )
                .finally(() => {
                    setLoading(false);
                })
        }
    }, [game]);


    return (
        <div id="ItemContainer">
            {loading ? <div id="loading"><CircularProgress color="inherit" /><h2>Loading, please wait...</h2></div> : <ItemList products={products} />}
            {error ? <h2>Error when trying to load the page, please try again...</h2> : null}
        </div >
    )
}

export default ItemListContainer