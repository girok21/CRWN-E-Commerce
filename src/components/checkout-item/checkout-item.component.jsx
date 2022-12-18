import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react'
import {CheckoutItemContainer, ImageContainer, Price, Arrow, Value, RemoveButton, Quantity} from './checkout-item.styles.jsx'

const CheckoutItem = ({cartItem})=>{
    const { imageUrl, name, price, quantity } = cartItem;
    const { DecrementItemFromCart, IncrementItemFromCart, RemoveItemFromCart } = useContext(CartContext);

    const onDecrementClickHandler = ()=>{
        DecrementItemFromCart(cartItem);
    }
    const onIncrementClickHandler = ()=>{
        IncrementItemFromCart(cartItem);
    }
    const onRemoveClickHandler = () =>{

        RemoveItemFromCart(cartItem);
    }


    return(
        <CheckoutItemContainer>
            <ImageContainer src={imageUrl} alt={name}/>
            <span className='name'>{name}</span>
            <Quantity>
                <Arrow onClick={onDecrementClickHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={onIncrementClickHandler}>&#10095;</Arrow>
            </Quantity >
            <Price>₹{  price * quantity }</Price>
            <RemoveButton onClick={onRemoveClickHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>       
    )
}

export default CheckoutItem;