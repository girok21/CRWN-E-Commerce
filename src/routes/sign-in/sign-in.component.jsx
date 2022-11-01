import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

function SignIn(){
    
    const logGoogleUser = async() => {
        const response = await signInWithGooglePopup();
        console.log(response);
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