import { createContext, useState } from "react"
import { toast } from "react-toastify";

export const cartContext = createContext([]);
const { Provider } = cartContext;

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product, count) => {
        let cartProduct = { product, count }
        let tempCart = []

        if (isInCart(product)) {
            cartProduct = cart.find(item => item.product === product)
            cartProduct.count = cartProduct.count + count
            tempCart = [...cart]
        } else {
            tempCart = [cartProduct, ...cart]
        }
        setCart(tempCart)
    }

    const clearCart = () => {
        setCart([]);
        toast.info("Cart deleted.");
    }

    const deleteFromCart = (product) => {
        if (isInCart(product)) {
            const tempCart = cart.filter(item => item.product !== product)
            setCart(tempCart)
            toast.info(product.name + " removed from your cart.");
        }
    }

    const isInCart = (product) => {
        return cart && cart.some(item => item.product === product);
    }

    return (
        <Provider value={{ cart, deleteFromCart, addToCart, clearCart }}>
            {children}
        </Provider>
    )
}

export default CartProvider