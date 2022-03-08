import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import CircularProgress from '@mui/material/CircularProgress';


let productsInitial = [
    { id: 1, name: "iRacing Hoodie", img: "/assets/hoodie-iracing.jpg", price: 35, stock: 10 },
    { id: 2, name: "EFT T-Shirt", img: "/assets/tshirt-eft.jpg", price: 25, stock: 10 },
    { id: 3, name: "Star Citizen Collectors Drink Set", img: "/assets/collectorsdrinkset-SC.png", price: 89, stock: 2 },
    { id: 4, name: "EFT Killa Mug", img: "/assets/killamug-eft.png", price: 19, stock: 15 },
    { id: 5, name: "Star Citizen Backpack", img: "/assets/SC-backpack.jpg", price: 30, stock: 10 }
]

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const PromiseTest = new Promise((res, rej) => {
            setTimeout(() => {
                res(productsInitial);
            }, 2000)
        })

        PromiseTest
            .then((res) => {
                setProducts(productsInitial);
            })
            .catch((rej) => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])


    return (
        <div id="ItemListContainer">
            {loading ? <div id="loading"><CircularProgress color="inherit" /><h2>Loading, please wait...</h2></div> : null}
            {error ? <h2>Error when trying to load the page, please try again...</h2> : null}
            <ItemList products={products} />
        </div >
    )
}

export default ItemListContainer