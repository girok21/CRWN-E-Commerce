import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react'
import './checkout-item.styles.scss'

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
        <div className='checkout-item-container'>
            <img className='image-container' src={imageUrl} alt={name}/>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={onDecrementClickHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={onIncrementClickHandler}>&#10095;</div>
            </span>
            <span className='price'>₹{  price * quantity }</span>
            <span className='remove-button' onClick={onRemoveClickHandler}>&#10005;</span>
        </div>       
    )
}

export default CheckoutItem;