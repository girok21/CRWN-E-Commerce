import Button from '../button/button.component.jsx'
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx'

const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const checkoutOnClickHandler = () =>{
        navigate('/checkout');
    }
    return(
        <CartDropdownContainer>
            {cartItems.length!==0 ? 
            (<CartItems>
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
            </CartItems>):
            (<EmptyMessage>Cart is Empty</EmptyMessage>)}
            <Button onClick={checkoutOnClickHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )  
}

export default CartDropdown;