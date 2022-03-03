import { ButtonGroup , Container , Button } from "@mui/material";
import { useState } from 'react';

const Item = (props) => {

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
        <Container maxWidth="md">
            <h3>{props.name}</h3>
            <img src={props.img} />
            <p>Price: ${props.price}</p>
            <div>
                <p>Available Stock: {props.stock}</p>
                <p>Units to purchase: {counter}</p>
                <ButtonGroup className="ButtonGroup" variant="text" aria-label="text button group">
                    <Button onClick={subtractAmount} variant="contained" color="error" disabled={counter === 0}>-</Button>
                    <Button onClick={addItem} disabled={counter === 0}>Add To Cart</Button>
                    <Button onClick={addAmount} variant="contained" color="success" disabled={counter === props.stock}>+</Button>
                </ButtonGroup>
            </div>
        </Container >
    )
}

export default Item