import React from 'react';
import Dashboard from '../../Dashboard';
import "./Header.css";
import HeaderMenu from './HeaderMenuDash';

function Header(props){
    return(
        <div className="header-container"> 
            <div className="title-text-container">
                <p className="header-title-text">Dashboard</p>
            </div>
            <div>
                <HeaderMenu update={props.update} />
            </div>
        </div>
    );
}

export default Header;
