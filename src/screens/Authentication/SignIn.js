import React from 'react';
import "./SignIn.css";
import Auth from './components/Auth';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons';
import { TextField, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function SignIn() {
    
    // const styles = theme => ({
    //     multilineColor:{
    //         color:'white'
    //     }
    // })
    // const useStyles = makeStyles({
    //     textcol:{
    //         color:'white',
    //         width: '200%',
    // height: '50px',
    // background: '#292836',
    // borderradius: '12px'
    //     }
    //   })
    //   const classes = useStyles();
    return (
        <Auth>
            <div className="signin-container">
                <p className="signin-header">Sign In</p>
                <form className="signin-form">
                    <TextField 
                    InputProps={{
                            startAdornment:   <FontAwesomeIcon icon={faUser} />
                          }}
                        className="text-field" 
                        id="outlined-basic" 
                        placeholder="Username/Email" 
                        variant="outlined"
                        margin= "normal" 
                        position= "start"
                        // className={classes.textcol}
                     />
                    <TextField 
                    InputProps={{
                            startAdornment:   <FontAwesomeIcon icon={faLock} />
                          }}
                        //   className={classes.textcol}
                    className="text-field" id="outlined-basic" placeholder="Password" variant="outlined" margin= "normal" type="password" />
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

