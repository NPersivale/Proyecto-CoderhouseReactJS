import ItemDetail from "./ItemDetail";
import { db } from "./Firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';
import { query, where, getDocs, collection } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [object, setObject] = useState({});
    const { slug } = useParams();

    useEffect(() => {
        setLoading(true);
        const filteredDocuments = getDocs(query(collection(db, "products"), where("slug", "==", slug)));

        filteredDocuments.then((snapshot) => {
            setObject(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))[0]);
        })
            .catch(() => {
                toast.error("Error when trying to load the product");
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [slug]);


    return (
        < div id="ItemContainer" >
            {loading ? <div id="loading">< CircularProgress color="inherit" /> <h2>Loading, please wait...</h2></div > : <ItemDetail key={object.id} object={object} />}
            {error ? <h2>Error when trying to load the page, please try again...</h2> : null}
        </div >
    )
}

export default ItemDetailContainer