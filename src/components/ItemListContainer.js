const ItemListContainer = (props) => {
    return (
        <div id="ItemListContainer">
            <h3>I'm {props.name}, nice to meet you!</h3>
            <p>By the way I'm {props.age} years old</p>
        </div>
    )
}

export default ItemListContainer