import React from 'react';
import "./WalletCard.css";


function WalletCard(){
    return(
        <div className="wallet-card-container">
            <div>
            <div className="wallet-card-icon">
                <img src="Bitcoin.svg" />
            </div>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
            <div className="wallet-card-balance">
                <p>1.9678</p>
                <p style={{marginLeft:"12px",fontSize:"12px",lineHeight:"15px",marginTop:"19px"}}>BTC</p>
            </div>
            <div className="wallet-card-change">
                <div style={{marginTop:"11px",marginRight:"7px"}}>
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.60609 3.60609L2.69695 4.51523C2.36222 4.84996 1.81951 4.84996 1.48477 4.51523C1.15004 4.18049 1.15004 3.63778 1.48477 3.30305L2.39391 2.39391L0 0H6V6L3.60609 3.60609Z" fill="white"/>
                </svg>
                </div>
                <p>12.5%</p>
            </div>
            </div>
        </div>
    );
}

export default WalletCard;