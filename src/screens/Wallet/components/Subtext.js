import React from "react"
import './Subtext.css'

function Subtext(props) {


    return (<div>
            <div className="text-3-container">
                    <div className="text-3">{props.context}</div>
            </div>
            </div>)
}

export default Subtext