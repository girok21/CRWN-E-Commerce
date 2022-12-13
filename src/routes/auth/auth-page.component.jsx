import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { UserContext } from '../../contexts/user.context';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

import {SignInMethodContainer} from './auth-page.styles.jsx';

function Auth(){
    const { currentUser } = useContext(UserContext);
    return(
        <SignInMethodContainer>
            {currentUser && (<Navigate to="/" replace={true} />)}
            <SignInForm />
            <SignUpForm />
        </SignInMethodContainer>
    )
}

export default Auth;