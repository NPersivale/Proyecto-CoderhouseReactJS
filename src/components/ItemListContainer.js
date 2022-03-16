import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { toast } from "react-toastify";
import { useParams } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import { productsInitial } from "./ProductsInitial"

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    const { game } = useParams();

    useEffect(() => {
        setLoading(true);
        const PromiseTest = new Promise((res, rej) => {
            setTimeout(() => {
                res(productsInitial);
            }, 2000)
        })

        PromiseTest
            .then((res) => {
                if (game != undefined) {
                    const productsFiltered = productsInitial.filter(product => product.game === game)
                    setProducts(productsFiltered)
                } else {
                    setProducts(productsInitial);
                }
            })
            .catch((rej) => {
                toast.error("Error when trying to load the products");
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [game])


    return (
        <div id="ItemContainer">
            {loading ? <div id="loading"><CircularProgress color="inherit" /><h2>Loading, please wait...</h2></div> : <ItemList products={products} />}
            {error ? <h2>Error when trying to load the page, please try again...</h2> : null}
        </div >
    )
}

export default ItemListContainer