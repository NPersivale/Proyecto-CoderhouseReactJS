import Item from "./Item"
import { useState, useEffect } from "react"

let productsInitial = [
    {
        name: "iRacing Hoodie",
        img: "/assets/hoodie-iracing.jpg",
        price: 35,
        stock: 10
    },
    {
        name: "EFT T-Shirt",
        img: "/assets/tshirt-eft.jpg",
        price: 25,
        stock: 10
    },
    {
        name: "Star Citizen Collectors Drink Set",
        img: "/assets/collectorsdrinkset-SC.png",
        price: 89,
        stock: 2
    },
]

const ItemList = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsInitial);
            setLoading(false);
        }, 2000)
    }, []
    );

    return (
        <>
            {loading ? <h1>Loading, please wait...</h1> : null}
            {products.map((product) => {
                return <Item name={product.name} price={product.price} stock={product.stock} img={product.img} />
            })}
        </>
    )
}

export default ItemList