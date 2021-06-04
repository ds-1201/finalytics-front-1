import React from 'react';
import Trend from './Trend';
import "./TrendList.css";

function TrendList(){
    return(
        <div className="trend-list-container">
            <p>Trend</p>
            <Trend />
        </div>
    );
}

export default TrendList;