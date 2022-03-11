import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { toast } from "react-toastify";
import { useParams } from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';




export let productsInitial = [
    { id: 1, slug: "iracingGrayHoodie", name: "iRacing Hoodie", img: "/assets/hoodie-iracing.jpg", price: 35, game: "iRacing", stock: 10, description: "This is the description of the iRacing Hoodie" },
    { id: 2, slug: "eftBlackTshirt", name: "EFT T-Shirt", img: "/assets/tshirt-eft.jpg", price: 25, game: "EFT", stock: 10, description: "This is the description of the EFT T-Shirt" },
    { id: 3, slug: "scCollectorsDrinkware", name: "Star Citizen Collectors Drink Set", img: "/assets/collectorsdrinkset-SC.png", price: 89, game: "StarCitizen", stock: 2, description: "This is the description of the SC Drink Set" },
    { id: 4, slug: "eftKillaMug", name: "EFT Killa Mug", img: "/assets/killamug-eft.png", price: 19, game: "EFT", stock: 15, description: "This is the description of the EFT Killa Mug" },
    { id: 5, slug: "scBlackBackpack", name: "Star Citizen Backpack", img: "/assets/SC-backpack.jpg", price: 30, game: "StarCitizen", stock: 10, description: "This is the description of the SC Backpack" },
    { id: 6, slug: "iracing30ozTumbler", name: "iRacing 30Oz Tumbler", img: "/assets/30oztumbler-iracing.png", price: 25, game: "iRacing", stock: 15, description: "This is the description of the iRacing Tumbler" },
    { id: 7, slug: "scStainlessSteelMug", name: "Star Citizen Stainless Steel Mug", img: "/assets/stainlessmug-SC.png", price: 29, game: "StarCitizen", stock: 10, description: "This is the description of the SC Steel Mug" },
    { id: 8, slug: "iracingGrayTshirt", name: "iRacing T-Shirt", img: "/assets/tshirt-iracing.jpg", price: 25, game: "iRacing", stock: 10, description: "This is the description of the iRacing T-Shirt" },
    { id: 9, slug: "eftLabsMug", name: "EFT Labs Mug", img: "/assets/labsmug-eft.png", price: 19, game: "EFT", stock: 10, description: "This is the description of the EFT Labs Mug" },
    { id: 10, slug: "scRsiMug", name: "Star Citizen RSI Mug", img: "/assets/rsimug-SC.png", price: 19, game: "StarCitizen", stock: 10, description: "This is the description of the SC RSI Mug" }
]

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