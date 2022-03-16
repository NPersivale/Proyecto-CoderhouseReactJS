import ItemCounter from "./ItemCounter"
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useState } from "react";
import { toast } from "react-toastify"
import { Link , useNavigate } from 'react-router-dom';

const ItemDetail = (props) => {

    const [countGone, setCountGone] = useState(false);
    const [unitsBought, setUnitsBought] = useState(0);

    const navigate = useNavigate();

    const onAdd = (activeCounter) => {
        if (activeCounter != undefined) {
            setCountGone(true);
            setUnitsBought(activeCounter);
        }
        toast.success("You've added " + activeCounter + " items to the cart!");
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
                    {countGone ?
                        <Link to="/cart/"><Button variant="contained" color="inherit"><ShoppingCartOutlinedIcon id="cartIcon" fontSize="large" /></Button></Link> :
                        <ItemCounter initial={1} stock={props.object.stock} onAdd={onAdd} />}
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