import { cartContext } from "./CartContext";
import { db } from "./Firebase";
import { query, where, getDocs, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext } from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom"


const Cart = () => {

    const useCartContext = useContext(cartContext);
    const { cart, deleteFromCart, clearCart, totalPrice, totalProds, cartCheckout } = useCartContext;

    const handleCheckout = () => {
        const newOrder = {
            buyer: {
                name: "Tester 1",
                phone: "(222) 222-2222",
                email: "test1@test.com"
            },
            items: cart,
            date: serverTimestamp(),
            total: totalPrice
        }
        const ordersCollection = collection(db, "orders");
        const order = addDoc(ordersCollection, newOrder);
        cartCheckout();
    }


    return (
        <>
            <div id="cartBackground">
                {cart.length == 0 ? <Link className="styleRemove flexCart" to="/"><Button className="cartIsEmpty dropShadow" color="inherit"><h2>Cart is empty - Click to go back to the Store</h2></Button></Link> :
                    <>{
                        cart.map(item => (
                            <div key={item.product.id} id="cart" className="dropShadow">
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
                        ))
                    }

                        <div id="cart" className="dropShadow">
                            <div className="cartText">
                                <h3>Cart Total: ${totalPrice}</h3>
                                <h3>Total Products: {totalProds}</h3>
                            </div>
                            <div className="cartButtons">
                                <Button onClick={handleCheckout} variant="contained" color="success">Checkout</Button>
                                <Button onClick={clearCart} variant="contained" color="error">Clear Cart</Button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default Cart