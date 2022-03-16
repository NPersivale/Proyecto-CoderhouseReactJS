import { useState } from 'react';
import { ButtonGroup, Button } from "@mui/material";

const ItemCounter = (props) => {

    const [counter, setCounter] = useState(props.initial);

    const subtractAmount = () => {
        setCounter(prevCount => prevCount - 1);
    }
    const addAmount = () => {
        setCounter(prevCount => prevCount + 1);
    }

    const addToCart = () => {
        props.onAdd(counter);
    }

    return (
        <>
            <p>Units to purchase: {counter}</p>
            <div>
                <ButtonGroup className="ButtonGroup dropShadow" aria-label="text button group">
                    <Button onClick={subtractAmount} variant="contained" color="error" disabled={counter === 0}>-</Button>
                    <Button id="addToCart" onClick={addToCart} disabled={counter === 0}>Add To Cart</Button>
                    <Button onClick={addAmount} variant="contained" color="success" disabled={counter === props.stock}>+</Button>
                </ButtonGroup>
            </div>
        </>
    )
}

export default ItemCounter