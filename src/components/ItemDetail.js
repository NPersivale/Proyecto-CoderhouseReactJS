const ItemDetail = (props) => {
    return (
        <div id="itemDetail">
            <h2>Item Description:</h2>
            {props.object.description}
        </div>
    )
}

export default ItemDetail