import { cartContext } from "./CartContext";
import { db } from "./Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom"
import TextField from '@mui/material/TextField';



const Cart = () => {
    const useCartContext = useContext(cartContext);
    const { cart, deleteFromCart, clearCart, totalPrice, totalProds, cartCheckout } = useCartContext;
    const [buyerName, setBuyerName] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");

    const handleCheckout = () => {
        const newOrder = {
            buyer: {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail
            },
            items: cart,
            date: serverTimestamp(),
            total: totalPrice
        }
        const ordersCollection = collection(db, "orders");
        const order = addDoc(ordersCollection, newOrder);
        cartCheckout();
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
            <div id="cartBackground">
                {cart.length == 0 ? <Link className="styleRemove flexCart" to="/"><Button className="cartIsEmpty dropShadow" color="inherit"><h2>Cart is empty - Click to go back to the Store</h2></Button></Link> :
                    <>
                        <div id="cartItems">
                            <div id="cartContainer" className="dropShadow cart cartContent">
                                <h2>Cart Detail</h2>
                                {cart.map(item => (
                                    <div key={item.product.id} id="" className="dropShadow cart">
                                        <div className="cartText">
                                            <img src={item.product.img} />
                                            <span><h3>Items:</h3><p>{item.product.name}</p></span>
                                            <span><h3>Item Price and Amount: </h3><p>${item.product.price} x {item.count} units</p></span>
                                            <span><h3>Total:</h3> <p>${item.product.price * item.count}</p></span>
                                        </div>
                                        <div className="cartButtons">
                                            <Button onClick={() => deleteFromCart(item.product)} variant="contained" color="error">Delete product</Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div id="cartContainer" className="dropShadow cart cartForm">
                                <h2>Checkout Information:</h2>
                                <TextField className="formItems" required variant="filled" label="Full Name" onChange={handleNameChange} value={buyerName} />
                                <TextField className="formItems" required variant="filled" label="Phone Number" onChange={handlePhoneChange} value={buyerPhone} />
                                <TextField className="formItems" required variant="filled" label="Email Address" onChange={handleEmailChange} value={buyerEmail} />
                                <div className="cartFooter dropShadow cart">
                                    <div className="cartText">
                                        <h3>Cart Total: ${totalPrice}</h3>
                                        <h3>Total Products: {totalProds}</h3>
                                    </div>
                                    <div className="cartButtons">
                                        <Button onClick={handleCheckout} variant="contained" color="success">Complete Purchase</Button>
                                        <Button onClick={clearCart} variant="contained" color="error">Clear Cart</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Cart