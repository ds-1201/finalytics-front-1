import React from 'react';

import './StockDetails.css';

function StockDetails(props) {
    return (
        <div>
            <div className="stock-details-container">
            <div className="stock-details">
                <h4>{props.currentStock.Name}</h4>
                <h3>{`$ ${props.currentValue}`}</h3>
                <p><b>Industry: </b>{props.currentStock.Industry}</p>
                <p><b>Sector: </b>{props.currentStock.Sector}</p>
             </div>
            </div>
        </div>
    )
}

export default StockDetails;
