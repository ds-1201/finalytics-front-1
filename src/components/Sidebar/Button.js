import React from 'react';
import "./Button.css";

import { faBars, faWallet, faExchangeAlt, faChartLine, faUsersCog, faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props){

    const renderIcon = () => {
        switch(props.name) {
          case 'Dashboard': return <FontAwesomeIcon className={props.id === props.active ? "icons selected":"icons"} icon={faBars} />;
          case 'Wallet': return <FontAwesomeIcon className={props.id === props.active ? "icons selected":"icons"} icon={faWallet} />;
          case 'Trade': return <FontAwesomeIcon className={props.id === props.active ? "icons selected":"icons"} icon={faExchangeAlt} />;
          case 'Trade History': return <FontAwesomeIcon className={props.id === props.active ? "icons selected":"icons"} icon={faChartLine} />;
          case 'How To Trade': return <FontAwesomeIcon className={props.id === props.active ? "icons selected":"icons"} icon={faGraduationCap} />;
          case 'Account Settings': return <FontAwesomeIcon className={props.id === props.active ? "icons selected":"icons"} icon={faUsersCog} />;
        }
      }

    const onClickHandler = () => {
        {props.onClickHandler(props.id)}
    }

    return(
        <>
            <div className="btn-container">
                <button className={props.id === props.active ? "btn selected":"btn"} onClick={onClickHandler}>
                    {renderIcon()}
                    {props.name}
                </button>
            </div>   
        </>
    );
}

export default Button;
