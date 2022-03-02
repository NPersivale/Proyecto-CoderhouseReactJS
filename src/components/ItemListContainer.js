import { useState } from "react"
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { ButtonGroup } from "@mui/material";


const ItemListContainer = (props) => {

    const subtractAmount = () => {
        setCounter(prevCount => prevCount - 1);
        { counter - 1 < props.stock ? setDisableStock(false) : setDisableStock(true) }
        { counter - 1 <= 0 ? setDisableNegative(true) : setDisableNegative(false) }
    }

    const addAmount = () => {
        setCounter(prevCount => prevCount + 1);
        { counter + 1 < props.stock ? setDisableStock(false) : setDisableStock(true) }
        { counter + 1 < 0 ? setDisableNegative(true) : setDisableNegative(false) }
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
    const [disableStock, setDisableStock] = useState(false);
    const [disableNegative, setDisableNegative] = useState(true);

    return (
        <div id="ItemListContainer">
            <Container maxWidth="md">
                <h3>Product: {props.name}</h3>
                <p>Price: ${props.price}</p>
                <div>
                    <p>Available Stock: {props.stock}</p>
                    <p>Units to purchase: {counter}</p>
                    <ButtonGroup className="ButtonGroup" variant="text" aria-label="text button group">
                        {disableNegative ?
                            <Button onClick={subtractAmount} variant="contained" color="error" disabled>-</Button> :
                            <Button onClick={subtractAmount} variant="contained" color="error">-</Button>
                        }
                        <Button onClick={addItem}>Add To Cart</Button>
                        {disableStock ?
                            <Button onClick={addAmount} variant="contained" color="success" disabled>+</Button> :
                            <Button onClick={addAmount} variant="contained" color="success">+</Button>
                        }
                    </ButtonGroup>
                </div>
            </Container >
        </div >
    )
}

export default ItemListContainer