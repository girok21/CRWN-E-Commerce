import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { UserContext } from '../../contexts/user.context';
import { Navigate } from 'react-router-dom';

import './auth-page.styles.scss';
import { useContext } from 'react';

function Auth(){
    const { currentUser } = useContext(UserContext);
    return(
        <div className="sign-in-method-containter">
            {currentUser && (<Navigate to="/" replace={true} />)}
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Auth;