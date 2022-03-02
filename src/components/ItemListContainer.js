import { useState } from "react"
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { ButtonGroup } from "@mui/material";


const ItemListContainer = (props) => {

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

    const [counter, setCounter] = useState(props.initial);

    return (
        <div id="ItemListContainer">
            <Container maxWidth="md">
                <h3>Product: {props.name}</h3>
                <p>Price: ${props.price}</p>
                <div>
                    <p>Available Stock: {props.stock}</p>
                    <p>Units to purchase: {counter}</p>
                    <ButtonGroup className="ButtonGroup" variant="text" aria-label="text button group">
                        <Button onClick={subtractAmount} variant="contained" color="error" disabled={counter === 0}>-</Button>
                        <Button onClick={addItem}>Add To Cart</Button>
                        <Button onClick={addAmount} variant="contained" color="success" disabled={counter === props.stock}>+</Button>
                    </ButtonGroup>
                </div>
            </Container >
        </div >
    )
}

export default ItemListContainer