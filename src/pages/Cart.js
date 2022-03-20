import { cartContext } from "../Context/CartContext";
import { useContext } from 'react';
import { Button } from "@mui/material";



const Cart = () => {

    const useCartContext = useContext(cartContext);
    const { cart, deleteFromCart, clearCart } = useCartContext;

    return (
        <>
            <div id="cartBackground">
                {cart.length == 0 ? <h2 className="cartIsEmpty">Cart is empty!</h2> :
                    <>{
                        cart.map(item => (
                            <div key={item.product.id} id="cart" className="dropShadow">
                                <div className="cartText">
                                    <img src={item.product.img} />
                                    <p><h3>Item:</h3><p>{item.product.name}</p></p>
                                    <p><h3>Item Price and Amount: </h3><p>${item.product.price} x {item.count} units</p></p>
                                    <p><h3>Total:</h3> <p>${item.product.price * item.count}</p></p>
                                </div>
                                <div className="cartButtons">
                                    <Button onClick={() => deleteFromCart(item.product)} variant="contained" color="error">Delete product</Button>
                                    <Button onClick={clearCart} variant="contained" color="primary">Clear Cart</Button>
                                </div>
                            </div>
                        ))
                    }
                    </>
                }
            </div>
        </>
    )
}

export default Cart