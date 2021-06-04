import React from 'react';
// import Dashboard from '../../Dashboard';
import "./Header.css";
import HeaderMenu from './HeaderMenu';

function Trade_Header(props) {
    return (
        <div className="header-container_th">
            <div className="title-text-container">
                <p className="trade_history">Trade History</p>
            </div>
            <div>
                <HeaderMenu update={props.update} />
            </div>
        </div>
    );
}


export default Trade_Header;
