import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { cartContext } from "../Context/CartContext";
import { useContext } from 'react';
import { Badge } from '@mui/material';

const CartWidget = () => {

    const useCartContext = useContext(cartContext);
    const { cart } = useCartContext;

    return (
        <>
            <Badge id="cartBadge" badgeContent={cart.length} color="info">
                <ShoppingCartOutlinedIcon />
            </Badge>
        </>
    )
}

export default CartWidget