import React, { useState, useEffect } from 'react';
import "./SignUp.css";
import Auth from './components/Auth'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRedo, faFilter, faUser, faEnvelope, faGlobe, faLock} from '@fortawesome/free-solid-svg-icons';
import { TextField, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import SubLine from "./components/SubLine";
import { useHistory } from 'react-router-dom';

function SignUp() {

    const initialValues={
        username:"",
        email:"",
        password:"",
        cpassword:""
    }
    const [userDetails,setUserDetails]=useState(initialValues)
    const [checkboxValue,setCheckboxValue]=useState(false);
    const [status,setStatus]=useState(0);
    const [errorMessages,setErrorMessages]=useState({})
    const handleInputChange=(e)=>{
        setStatus(0)
        setErrorMessages({})
        setUserDetails(prevData=>{
            
            return {
                ...prevData,
                [e.target.name]:e.target.value
            }
        })
    }
    let history=useHistory();
    useEffect(()=>{
        if(localStorage.id!=undefined)
        history.replace("/");
    },[]);
    const handleCheckbox=(e)=>{

        setCheckboxValue(e.target.checked)
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        if(!checkboxValue)
        window.alert("Please accept terms and conditions first")
        else
        {
            const user={
                email:userDetails.email,
                username:userDetails.username,
                password:userDetails.password,
                password2:userDetails.cpassword
            }       
            axios.post("https://finalyticsad.fintract.co.uk/auth/register/",`email=${userDetails.email}&username=${userDetails.username}&password=${userDetails.password}&password2=${userDetails.cpassword}`)
            .then(res => {
            // console.log(res)
            // console.log(res.status)
            // console.log(res.data)
            setStatus(res.status)
            })
            .catch(error=>{
                if (error.response) {
                    setStatus(error.response.status)
                    setErrorMessages(error.response.data)
                    // console.log(Object.values(error.response.data));
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                }
                else
                window.alert("There is some internal error. Please check your network connection or try again later.")
            })
        }
    }

    return (
        <Auth>
            {console.log(status)}
            <div className="signup-container">
                <p className="signup-header">Sign Up</p>

                <form className="signup-form" onSubmit={handleFormSubmit}>
                    <TextField 

                         InputProps={{
                            startAdornment:   <FontAwesomeIcon icon={faUser} />
                          }}
                        className="text-field-up" 
                        id="outlined-basic" 
                        placeholder="Username" 
                        label="Username"
                        variant="filled"
                        margin= "normal" 
                    
                        name="username"
                        value={userDetails.username}
                        onChange={handleInputChange}
                     />
                    {
                    errorMessages.username&&<SubLine size="14px">{errorMessages.username}</SubLine>
                    }
                
                    <TextField    InputProps={{
                            startAdornment:   <FontAwesomeIcon icon={faEnvelope} />
                          }}
                    label="Email"
                    className="text-field-up" id="outlined-basic" placeholder="Email" variant="filled" margin= "normal" 
                    onChange={handleInputChange} name="email" value={userDetails.email}/>
                     {
                    errorMessages.email&&<SubLine size="14px">{errorMessages.email}</SubLine>
                     }
                     
                    
                    {/* <TextField type="email" className="text-field-up" id="outlined-basic" label="Country" variant="outlined" margin= "normal" 
                    onChange={handleInputChange} name="country" value={userDetails.country} />
                    {
                    errorMessages.country&&<SubLine>{errorMessages.country}</SubLine>
                    } */}
                
                    <TextField   InputProps={{
                            startAdornment:   <FontAwesomeIcon icon={faLock} />
                          }}
                          label="Password"
                    className="text-field-up" id="outlined-basic" type="password" placeholder="Password" variant="filled" margin= "normal" 
                    onChange={handleInputChange} name="password" value={userDetails.password} type="password"/>
                     {
                    errorMessages.password&&<SubLine size="14px">{errorMessages.password}</SubLine>
                     }
                    <TextField    InputProps={{
                            startAdornment:   <FontAwesomeIcon icon={faLock} />
                          }}
                        label="Confirm Password"
                    className="text-field-up" id="outlined-basic" type="password" placeholder="Confirm Password" variant="filled" margin= "normal" 
                    onChange={handleInputChange} name="cpassword" value={userDetails.cpassword} type="password"/>
                     {
                    errorMessages.password2&&<SubLine size="14px">{errorMessages.password2}</SubLine>
                     }
                <div className="tc-text-container">
                    <Checkbox
                        value={checkboxValue}
                        inputProps={{ 'aria-label': 'Checkbox A' }}
                        onChange={handleCheckbox}
                    />
                    <p className="tc-text">I agree to <u>Terms & Conditions</u></p>
                </div>
                <button className="signup-button" type="submit"><p className="signup-button-text">Sign Up</p></button>
                </form>
                {status===201&&<SubLine style={{marginTop:"10px"}}>Account has been registered. Please confirm your email and proceed to sign in.</SubLine>}
                <div>          
                    <p className="footer-text">Already have an account?<a className="footer-text-link" href={"/signin"}> Sign In</a></p>
                </div>
            </div>            
        </Auth>
    )
}

export default SignUp
