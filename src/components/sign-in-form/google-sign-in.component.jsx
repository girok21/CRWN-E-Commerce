import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
const GoogleSignIn = ()=> {

    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }


    return(
        <Button 
            children = 'Sign In with Google'
            onClick = { logGoogleUser }
            buttonType = 'google'
        />
    )
}

export default GoogleSignIn;