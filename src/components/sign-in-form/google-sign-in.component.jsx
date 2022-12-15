import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
const GoogleSignIn = ()=> {
    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }


    return(
        <Button 
            children = 'Sign In with Google'
            onClick = { logGoogleUser }
            buttonType = {BUTTON_TYPE_CLASSES.google}
        />
    )
}

export default GoogleSignIn;