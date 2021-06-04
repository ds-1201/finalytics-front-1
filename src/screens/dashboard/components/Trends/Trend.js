import React from 'react';

import "./Trend.css";

function Trend(){
    return(
    <div className="trend-container">
        <div style={{display:"flex"}}>
        <div className="conversion-box">
            <p>BTC</p>
            <svg style={{}} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7L2 4L5 1" stroke="#37346F" stroke-width="2"/>
                <path d="M8 11L11 8L8 5" stroke="#37346F" stroke-width="2"/>
            </svg>
            <p>USD</p>
        </div>
        <div className="change-box">
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.60609 2.39391L2.69695 1.48477C2.36222 1.15004 1.81951 1.15004 1.48477 1.48477C1.15004 1.81951 1.15004 2.36222 1.48477 2.69695L2.39391 3.60609L0 6H6V0L3.60609 2.39391Z" fill="#E3507A"/>
            </svg>
            <p>-5.23%</p>
        </div>
        </div>
        <div className="trend-title-box">
            <p>7.356,67</p>
        </div>
    </div>
    );
}

export default Trend;