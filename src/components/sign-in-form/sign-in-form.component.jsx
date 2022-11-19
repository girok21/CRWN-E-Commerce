import { useState } from 'react';
import GoogleSignIn from "./google-sign-in.component";
import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';

import { loginUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email : '',
    password : '',
}

const SignInForm = ()=> {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;   

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await loginUserWithEmailAndPassword(email, password);
        }catch(error){
            if (error.code === 'auth/user-not-found') {
                alert('No user found');
              } else if (error.code === 'auth/wrong-password') {
                alert('Wrong Password');
              }
        }
        resetFormFields();
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value })
    }

    return(
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={ handleSubmit }>
                <FormInput 
                    label = 'Email'
                    type = 'email'
                    required
                    onChange = {handleChange}
                    name = {"email"}
                    value={email}
                />
                <FormInput 
                    label = 'Password'
                    type = 'password'
                    required
                    onChange = {handleChange}
                    name = {"password"}
                    value = {password}
                />
                <div className='button-group'>
                <Button 
                    type = 'submit'
                    children= 'Sign In'
                />
                <GoogleSignIn />
            </div>
            </form>
        </div>
    )
}

export default SignInForm;