import { useState } from 'react';
import { ButtonGroup, Button } from "@mui/material";
import { Link } from "react-router-dom";


const ItemCounter = (props) => {

    const [counter, setCounter] = useState(0);

    const subtractAmount = () => {
        setCounter(prevCount => prevCount - 1);
    }
    const addAmount = () => {
        setCounter(prevCount => prevCount + 1);
    }
    const addItem = () => {
        if (props.stock < counter) {
            console.log("no hay stock!");
        } else {
            onAdd();
        }
    }
    const onAdd = () => {
        console.log("hay stock!");
    }

    return (
        <>
            <p>Units to purchase: {counter}</p>
            <div>
                <ButtonGroup className="ButtonGroup" aria-label="text button group">
                    <Button onClick={subtractAmount} variant="contained" color="error" disabled={counter === 0}>-</Button>
                    <Button id="addToCart" onClick={addItem} disabled={counter === 0}>Add To Cart</Button>
                    <Button onClick={addAmount} variant="contained" color="success" disabled={counter === props.stock}>+</Button>
                </ButtonGroup>
                <Link className="styleRemove" to={/item/ + props.slug}><Button id="detailsButton" variant="contained">More Details</Button></Link>
            </div>
        </>
    )
}

export default ItemCounter