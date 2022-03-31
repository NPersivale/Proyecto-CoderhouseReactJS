import CartItem from "./CartItem";
import CartCheckoutForm from "./CartCheckoutForm";
import { cartContext } from "./CartContext";
import { useContext } from 'react';


const CartContainer = (props) => {
    const useCartContext = useContext(cartContext);
    const { deleteFromCart } = useCartContext;


    return (
        <div id="cartItems">
            <div id="cartContainer" className="dropShadow cart cartContent">
                <h2>Cart Detail</h2>
                {props.cart.map(item => (
                    <CartItem key={item.product.id} item={item} deleteFromCart={deleteFromCart} />
                ))}
            </div>
            <div id="cartContainer" className="dropShadow cart cartForm">
                <CartCheckoutForm cart={props.cart} />
            </div>
        </div>
    )
}
export default CartContainer