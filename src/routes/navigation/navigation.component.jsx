import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import CartIcon from "../../components/cart-icon/cart-icon-component.jsx";
import { ReactComponent as CrwnLogo } from '../../assets/083 crown.svg';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context.jsx";


import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles.jsx';

function NavigationBar(){
    const { currentUser } = useContext(UserContext);
    const { isCartDropdown } = useContext(CartContext);
    const signOutHandler = async()=>{
      await signOutUser();
    }

    return(
    <Fragment>
      <NavigationContainer>
        <LogoContainer to= '/'>
          <CrwnLogo className='logo'/>
        </LogoContainer>
        <NavLinksContainer>
          {/* <Link>
          {currentUser ? (<span className="nav-link">Hello, {`${currentUser.displayName}`}</span>) : (<span></span>)}
          </Link> */}
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
                <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>)
            : (<NavLink to='/auth'>
                SIGN IN
              </NavLink>
            )
          }
          <div className="cart-icon">
            <CartIcon/>
          </div>
        </NavLinksContainer>{
          isCartDropdown && <CartDropdown />
        }
      </NavigationContainer>
      <Outlet />
    </Fragment>
    )
  }

  export default NavigationBar;