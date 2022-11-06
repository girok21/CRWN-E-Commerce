import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './auth-page.styles.scss';

function Auth(){
    return(
        <div className="sign-in-method-containter">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Auth;