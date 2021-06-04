import React from 'react'
import './Auth.css';

function Auth(props) {
    return (
        <div className="Auth-container">
            <div className="auth-left">
                <img className="lscg-logo" src="logotransparent.png" />
                <p className="auth-left-text">Hello! Welcome to the Finalytics trading platform</p>
                <img className="auth-image" src="auth-image.svg" />
            </div>
            <div className="auth-right">  
                {props.children}
            </div>
        </div>
    )
}

export default Auth
