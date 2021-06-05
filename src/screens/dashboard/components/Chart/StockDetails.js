import React from 'react';

import './StockDetails.css';

function StockDetails(props) {
    return (
        <div>
        <div className="stock-details-container">
        <div className="stock-details">
            <h4 id="compname">{props.currentStock.Name}</h4>
            <h3 id="compvalue">{`$ ${props.currentValue}`}</h3>
            <p id="compindustry"><b><u>Industry</u></b><b>:  </b>{props.currentStock.Industry}</p>
            <p id="compsector"><b><u>Sector</u></b><b>:  </b>{props.currentStock.Sector}</p>
         </div>
        </div>
    </div>
    )
}

export default StockDetails;
