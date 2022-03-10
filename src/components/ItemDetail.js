import GoBackButton from "./GoBackButton";

const ItemDetail = (props) => {
    return (
        <>
            <GoBackButton />
            <div id="itemDetail">
                <h3>{props.object.name}</h3>
                <img src={props.object.img} />
                <p>Price: ${props.object.price}</p>
            </div>
            <div id="itemDetail">
                <h2>Item Description:</h2>
                {props.object.description}
            </div>
        </>
    )
}

export default ItemDetail