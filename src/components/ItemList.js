import Item from "./Item"
import { useState, useEffect } from "react"
import CircularProgress from '@mui/material/CircularProgress';


let productsInitial = [
    { name: "iRacing Hoodie", img: "/assets/hoodie-iracing.jpg", price: 35, stock: 10 },
    { name: "EFT T-Shirt", img: "/assets/tshirt-eft.jpg", price: 25, stock: 10 },
    { name: "Star Citizen Collectors Drink Set", img: "/assets/collectorsdrinkset-SC.png", price: 89, stock: 2 },
    { name: "EFT Killa Mug", img: "/assets/killamug-eft.png", price: 19, stock: 15 },
    { name: "Star Citizen Backpack", img: "/assets/SC-backpack.jpg", price: 30, stock: 10 }
]

const ItemList = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsInitial);
            setLoading(false);
        }, 2000)
    }, []);

    return (
        <>
            {loading ? <div id="loading"><CircularProgress color="inherit" /><h2>Loading, please wait...</h2></div> : null}
            {products.map((product) => {
                return <Item name={product.name} price={product.price} stock={product.stock} img={product.img} />
            })}
        </>
    )
}

export default ItemList