import React from 'react';
import "./SignUp.css";
import Auth from './components/Auth'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRedo, faFilter} from '@fortawesome/free-solid-svg-icons';
import { TextField, Checkbox } from '@material-ui/core';


function SignUp() {
    return (
        <Auth>
            <div className="signup-container">
                <p className="signup-header">Sign Up</p>
                <form className="signup-form">
                    <TextField 
                        className="text-field-up" 
                        id="outlined-basic" 
                        label="Username" 
                        variant="outlined"
                        margin= "normal" 
                     />
                    <TextField className="text-field-up" id="outlined-basic" label="Email" variant="outlined" margin= "normal" />
                    <TextField className="text-field-up" id="outlined-basic" label="Country" variant="outlined" margin= "normal" />
                    <TextField className="text-field-up" id="outlined-basic" type="password" label="Password" variant="outlined" margin= "normal" />
                    <TextField className="text-field-up" id="outlined-basic" type="password" label="Confirm Password" variant="outlined" margin= "normal" />
                </form>
                <div className="tc-text-container">
                    <Checkbox
                        value="checkedA"
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                    />
                    <p className="tc-text">I agree to <u>Terms & Conditions</u></p>
                </div>
                <button className="signup-button"><p className="signup-button-text">Sign Up</p></button>
                <div>
                    <p className="footer-text">Already have an account?<a className="footer-text-link" href={"/signin"}> Sign In</a></p>
                 </div>
            </div>
        </Auth>
    )
}

export default SignUp
