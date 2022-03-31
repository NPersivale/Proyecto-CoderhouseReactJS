import { db } from "./Firebase";
import { cartContext } from "./CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from 'react';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import validator from "validator";


const CartCheckoutForm = (props) => {
    const useCartContext = useContext(cartContext);
    const { clearCart, totalPrice, totalProds, cartCheckout } = useCartContext;

    const [buyerName, setBuyerName] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");

    const validName = validator.isAlpha(buyerName, "es-ES", { ignore: " " });
    const validEmail = validator.isEmail(buyerEmail);
    const validPhone = validator.isNumeric(buyerPhone, "es-ES");

    const handleCheckout = () => {
        const newOrder = {
            buyer: {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail
            },
            items: props.cart,
            date: serverTimestamp(),
            total: totalPrice
        }
        const ordersCollection = collection(db, "orders");
        const order = addDoc(ordersCollection, newOrder);
        order.then((res) => {
            const orderId = res.id;
            cartCheckout(orderId);
        });
    }

    const handleNameChange = (e) => {
        setBuyerName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setBuyerEmail(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setBuyerPhone(e.target.value);
    }

    return (
        <>
            <h2>Checkout Information:</h2>
            <TextField className="formItems" error={!validName} helperText="Please enter a valid name" required variant="filled" label="Full Name" onChange={handleNameChange} value={buyerName} />
            <TextField className="formItems" error={!validPhone} helperText="Please enter a valid phone number" required variant="filled" label="Phone Number" onChange={handlePhoneChange} value={buyerPhone} />
            <TextField className="formItems" error={!validEmail} helperText="Please enter a valid email address" required variant="filled" label="Email Address" onChange={handleEmailChange} value={buyerEmail} />
            <div className="cartFooter dropShadow cart">
                <div className="cartText">
                    <h3>Cart Total: ${totalPrice}</h3>
                    <h3>Total Products: {totalProds}</h3>
                </div>
                <div className="cartButtons">
                    <Button onClick={handleCheckout} variant="contained" disabled={!validName || !validEmail || !validPhone} color="success">Complete Purchase</Button>
                    <Button onClick={clearCart} variant="contained" color="error">Clear Cart</Button>
                </div>
            </div>
        </>
    )
}
export default CartCheckoutForm