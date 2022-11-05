import { useState, useEffect } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email : '',
    password : '',
    confirmPassword : '',
}


const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    console.log(formFields)
    
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
        <div className='sign-up-container'>
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
                    label = 'email'
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
        </div>
    )
}

export default SignUpForm;