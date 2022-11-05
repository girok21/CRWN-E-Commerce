import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Button from "../../components/button/button.component";
function SignIn(){
    
    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <Button 
                children = 'Sign In with Google'
                onClick = { logGoogleUser }
                buttonType = 'google'
            />
            <SignUpForm />
        </div>
    )
}

export default SignIn;