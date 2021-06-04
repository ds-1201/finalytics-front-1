import React from 'react';

import "./Button.css";

function Button(props){

    const onClickHandler = () => {
        props.onClick(props.id)
    }

    return(
        <div>
            <button className={props.className} onClick={onClickHandler}>
                <p className="option-button-text" >{props.name}</p>
            </button>
        </div>
    )
}

export default Button;