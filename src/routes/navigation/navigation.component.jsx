import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/083 crown.svg';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';

function NavigationBar(){
    const { currentUser } = useContext(UserContext);
    const signOutHandler = async()=>{
      await signOutUser();
    }
    return(
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to= '/'>
          <CrwnLogo className='logo'/>
        </Link>
        <div className="nav-links-container">
          {/* <Link>
          {currentUser ? (<span className="nav-link">Hello, {`${currentUser.displayName}`}</span>) : (<span></span>)}
          </Link> */}
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
                <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>)
            : (<Link className="nav-link" to='/auth'>
                SIGN IN
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
    )
  }

  export default NavigationBar;