import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

function SignIn(){
    
    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <div>
            <h1>
                This is Sign In page!!!
            </h1>
            <button onClick = { logGoogleUser }>
                Sign In with Google
            </button>
        </div>
    )
}

export default SignIn;