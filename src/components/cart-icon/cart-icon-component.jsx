import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles.jsx';

const CartIcon = () =>{
    const { isCartDropdown, setIsCartDropdown, totalCartItems } = useContext(CartContext);

    const onDropdownClick = () =>{
        setIsCartDropdown(!isCartDropdown);
    }
    return(
        <CartIconContainer onClick={onDropdownClick}>
            <ShoppingIcon/>
            <ItemCount>{totalCartItems}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;