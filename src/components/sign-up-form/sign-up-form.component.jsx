import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {SignUpContainer} from './sign-up-form.styles.jsx';

const defaultFormFields = {
    displayName: '',
    email : '',
    password : '',
    confirmPassword : '',
}


const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, displayName);
            setCurrentUser(user);
            resetFormFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use')
                alert("Email already used to sign up!");
            console.log(error.message);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value })
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={ handleSubmit }>
                < FormInput 
                    label="Dsiplay Name"
                    type="text" 
                    required
                    onChange={handleChange} 
                    name={"displayName"} 
                    value={displayName}
                />
                < FormInput 
                    label = 'Email'
                    type = 'email'
                    required 
                    onChange={handleChange} 
                    name={"email"} 
                    value={email}
                />
                < FormInput 
                    label = 'Password'
                    required
                    type = 'password'
                    onChange={handleChange} 
                    name={"password"}
                    value={password}
                />
                < FormInput 
                    label = 'Confirm Password'
                    type = 'password'
                    required 
                    onChange={handleChange} 
                    name={"confirmPassword"}
                    value = {confirmPassword}
                />
                <Button
                    type = 'submit'
                    children = 'Sign Up'
                />             
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;