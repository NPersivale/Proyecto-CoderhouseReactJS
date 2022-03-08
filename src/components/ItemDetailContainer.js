import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"


let objectInitial = { id: 1, name: "iRacing Hoodie", img: "/assets/hoodie-iracing.jpg", price: 35, stock: 10, description: "iRacing Hoodie description goes here" };

const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [object, setObject] = useState([]);

    useEffect(() => {
        const PromiseTest = new Promise((res, rej) => {
            setTimeout(() => {
                res(objectInitial);
            }, 2000)
        })

        PromiseTest
            .then((res) => {
                setObject(objectInitial);
            })
            .catch((rej) => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])


    return (
        <div id="itemDetailContainer">
            {loading ? null : <ItemDetail object={object} />}
            {error ? <h2>Error when trying to load the page, please try again...</h2> : null}
        </div >
    )
}

export default ItemDetailContainer