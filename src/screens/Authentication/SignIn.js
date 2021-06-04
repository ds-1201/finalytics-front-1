import React from 'react';
import "./SignIn.css";
import Auth from './components/Auth'

import { TextField, Checkbox } from '@material-ui/core';


function SignIn() {
    return (
        <Auth>
            <div className="signin-container">
                <p className="signin-header">Sign In</p>
                <form className="signin-form">
                    <TextField 
                        className="text-field" 
                        id="outlined-basic" 
                        label="Username/Email" 
                        variant="outlined"
                        margin= "normal" 
                        position= "start"
                     />
                    <TextField className="text-field" id="outlined-basic" label="Password" variant="outlined" margin= "normal" type="password" />
                </form>
                <button className="signin-button"><p className="signin-button-text">Sign In</p></button>
                <div>
                    <p className="footer-text">Don't have an account?<a className="footer-text-link" href={"/signup"}> Sign Up</a></p>
                </div>
            </div>
        </Auth>
    )
}

export default SignIn;

