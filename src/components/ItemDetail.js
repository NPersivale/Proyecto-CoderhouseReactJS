import ItemCounter from './ItemCounter';
import Button from '@mui/material/Button';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link } from 'react-router-dom';
import { cartContext } from "./CartContext";
import { useState, useContext } from 'react';


const ItemDetail = (props) => {
    const [buttonHide, setButtonHide] = useState(true);

    const useCartContext = useContext(cartContext);
    const { addToCart } = useCartContext;

    const onAdd = (activeCounter) => {
        if (activeCounter !== undefined) {
            setButtonHide(false);
            addToCart(props.object, activeCounter);
        }
    }

    return (
        <>
            <div id="itemDetail" className="dropShadow">
                <Button variant="contained" color="inherit"><ArrowBackOutlinedIcon fontSize="large" onClick={() => { window.history.go(-1) }} /></Button>
                <div className="itemDetailImg dropShadow">
                    <img alt="" src={props.object.img} />
                </div>
                <div className="itemDetailSpecs dropShadow" >
                    <div className="itemDetailInfo">
                        <h2>{props.object.name}</h2>
                        <div className="itemDescription">
                            <h3 className='itemDescriptionTitle' >Item Description:</h3>
                            {props.object.description}
                        </div>
                        <h3>Price: ${props.object.price}</h3>
                    </div>
                    <div className="itemDetailButtons">
                        <p>Available Stock: {props.object.stock}</p>
                        <ItemCounter initial={1} stock={props.object.stock} onAdd={onAdd} />
                        {buttonHide || <Link className="styleRemove" to="/cart/"><Button id="purchaseButton" variant="contained" color="inherit">Proceed to checkout</Button></Link>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail