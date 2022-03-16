import InfoButton from "./InfoButton";

const Item = (props) => {

    return (
        <div id="storeItem" className="dropShadow">
            <h3>{props.name}</h3>
            <img src={props.img} />
            <h5>Price: ${props.price}</h5>
            <div>
                <InfoButton slug={props.slug} />
            </div>
        </div>
    )
}

export default Item