import { createContext, useState } from "react"
import { toast } from "react-toastify";

export const cartContext = createContext([]);
const { Provider } = cartContext;

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProds, setTotalProds] = useState(0);

    const cartCheckout = () => {
        toast.success("You've successfully checked out!");
    }


    const addToCart = (product, count) => {
        let cartProduct = { product, count };
        let tempCart = [];

        if (isInCart(product)) {
            cartProduct = cart.find(item => item.product === product)
            if (cartProduct.count + count <= product.stock) {
                cartProduct.count += count;
            } else {
                toast.error("You can't add more than " + product.stock + " units of " + product.name + " to your cart!");
                return;
            }
        } else {
            tempCart = [cartProduct, ...cart]
        }
        setCart(tempCart)

        let tempTotalPrice = 0;
        let tempTotalProds = 0;

        tempTotalPrice = totalPrice;
        tempTotalPrice += (product.price * count);
        setTotalPrice(tempTotalPrice);

        tempTotalProds = totalProds;
        tempTotalProds += count;
        setTotalProds(tempTotalProds);
    }

    const clearCart = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalProds(0);
        toast.info("Cart deleted.");
    }

    const deleteFromCart = (product) => {
        if (isInCart(product)) {
            let tempTotalPrice = 0;
            let tempTotalProds = 0;
            const tempCart = cart.filter(item => item.product !== product);

            tempCart.forEach((item) => {
                tempTotalPrice += (item.product.price * item.count);
                setTotalPrice(tempTotalPrice);

                tempTotalProds += item.count;
                setTotalProds(tempTotalProds);
            })

            setCart(tempCart);
            toast.info(product.name + " removed from your cart.");

            if (tempCart.length == 0) {
                clearCart();
            }
        }
    }

    const isInCart = (product) => {
        return cart && cart.some(item => item.product === product);
    }

    return (
        <Provider value={{ cart, deleteFromCart, addToCart, clearCart, totalPrice, totalProds, cartCheckout }}>
            {children}
        </Provider>
    )
}

export default CartProvider