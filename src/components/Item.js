import ItemCounter from "./ItemCounter";


const Item = (props) => {

    return (
        <div id="storeItem">
            <h3>{props.name}</h3>
            <img src={props.img} />
            <p>Price: ${props.price}</p>
            <div>
                <p>Available Stock: {props.stock}</p>
                <ItemCounter stock={props.stock} slug={props.slug} />
            </div>
        </div>
    )
}

export default Item