import { ReactComponent as ShoppingIcon } from '../../assets/111 shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () =>{
    const { isCartDropdown, setIsCartDropdown, totalCartItems } = useContext(CartContext);

    const onDropdownClick = () =>{
        setIsCartDropdown(!isCartDropdown);
    }
    return(
        <div className="cart-icon-container" onClick={onDropdownClick}>
            <ShoppingIcon className='shopping-icon'/>
            <span className="item-count">{totalCartItems}</span>
        </div>
    );
};

export default CartIcon;