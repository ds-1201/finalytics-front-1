import React from 'react';
import "./SignUp.css";
import Auth from './components/Auth'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRedo, faFilter, faUser, faEnvelope, faGlobe, faLock} from '@fortawesome/free-solid-svg-icons';
import { TextField, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import {user} from 'react-bootstrap-icons'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
// import {MDBIcon} from 'mdbreact/dist/css/mdb.css';
function SignUp() {
    // const useStyles = makeStyles({
    //     textcol:{
    //         color:'white',
    //         width: '35vw',
    // height: '50px',
    // background: '#292836',
    // borderradius: '12px'
    //     }
    //   })
    //   const classes = useStyles();
    return (
        <Auth>
            <div className="signup-container">
                <p className="signup-header">Sign Up</p>
                <form className="signup-form">
                {/* <MDBIcon far icon="user" /> */}
              
                    <TextField
                    InputProps={{
                            startAdornment:   <FontAwesomeIcon icon={faUser} />
                          }}
                       
                        className="text-field-up" 
                        id="outlined-basic" 
                        placeholder="Username" 
                        variant="outlined"
                        margin= "normal" 
                        // className={classes.textcol}
                     />
                    <TextField 
                    InputProps={{
                            startAdornment:   <FontAwesomeIcon icon={faEnvelope} />
                          }}
                        //   className={classes.textcol}
                    className="text-field-up" id="outlined-basic" placeholder="Email" variant="outlined" margin= "normal" />
                    <TextField 
                      InputProps={{
                            startAdornment:   <FontAwesomeIcon icon={faGlobe} />
                          }}
                    className="text-field-up" id="outlined-basic" placeholder="Country" variant="outlined" margin= "normal" />
                    <TextField 
                        InputProps={{
                            startAdornment:   <FontAwesomeIcon icon={faLock} />
                          }}
                    className="text-field-up" id="outlined-basic" type="password" placeholder="Password" variant="outlined" margin= "normal" />
                    <TextField 
                    InputProps={{
                            startAdornment:   <FontAwesomeIcon icon={faLock} />
                          }}
                    className="text-field-up" id="outlined-basic" type="password" placeholder="Confirm Password" variant="outlined" margin= "normal" />
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
