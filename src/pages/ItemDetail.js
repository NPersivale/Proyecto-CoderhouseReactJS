import ItemCounter from '../components/ItemCounter';
import Button from '@mui/material/Button';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { toast } from "react-toastify"
import { Link, useNavigate } from 'react-router-dom';
import { cartContext } from "../Context/CartContext";
import { useState, useContext } from 'react';

const ItemDetail = (props) => {

    const [countGone, setCountGone] = useState(true);
    const [unitsBought, setUnitsBought] = useState(0);

    const useCartContext = useContext(cartContext);
    const { addToCart } = useCartContext;

    const navigate = useNavigate();

    const onAdd = (activeCounter) => {
        if (activeCounter != undefined) {
            setUnitsBought(activeCounter);
            setCountGone(false);
        }
        toast.success("You've added " + activeCounter + " items to the cart!");
    }

    const handlePurchase = () => {
        addToCart(props.object, unitsBought);
    }

    return (
        <>
            <Button variant="contained" color="inherit"><ArrowBackOutlinedIcon fontSize="large" onClick={() => navigate(-1)} /></Button>
            <div id="itemDetail" className="dropShadow">
                <div className="itemDetailImg dropShadow">
                    <img src={props.object.img} />
                </div>
                <div className="itemDetailSpecs dropShadow" >
                    <h3>{props.object.name}</h3>
                    <p>Price: ${props.object.price}</p>
                    <p>Available Stock: {props.object.stock}</p>
                    <ItemCounter initial={1} stock={props.object.stock} onAdd={onAdd} />
                    {countGone ? null : <Link className="styleRemove" to="/cart/"><Button id="purchaseButton" onClick={handlePurchase} variant="contained" color="inherit">Purchase</Button></Link>}
                </div>
            </div>
            <div id="itemDetail" className="itemDescription dropShadow">
                <h2>Item Description:</h2>
                {props.object.description}
            </div>
        </>
    )
}

export default ItemDetail