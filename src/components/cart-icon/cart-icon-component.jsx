import { ReactComponent as ShoppingIcon } from '../../assets/111 shopping-bag.svg';
import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';
import './cart-icon.styles.scss';

const CartIcon = () =>{
    const { isCartDropdown, setIsCartDropdown } = useContext(CartDropdownContext);

    const onDropdownClick = () =>{
        setIsCartDropdown(!isCartDropdown);
    }
    return(
        <div className="cart-icon-container" onClick={onDropdownClick}>
            <ShoppingIcon className='shopping-icon'/>
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;