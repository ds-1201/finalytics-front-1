import React from 'react';
import "./Wallet_Header.css";

function Header(props){
    return(
        <div className=" wallet-header-container"> 
            <div className="title-text-container">
               
                <p className="header-title-text">{props.name}</p>
            </div>
          
        </div>
    );
}

export default Header;