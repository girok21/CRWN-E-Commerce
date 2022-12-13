import Button from '../button/button.component';
import './product-card.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import {useContext} from 'react';

const ProductCard = ({product})=>{
    const { AddItemIdToCart} = useContext(CartContext);
    const{ name, price, imageUrl } = product;

    const AddTOCartHandler = ()=>{
        AddItemIdToCart(product);
    }
    return(
        <div className = "product-card-container">
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick = {AddTOCartHandler}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard; 