import React from "react";
// using same css for all the header styling
import "./Header.css";
import HeaderMenu from "./HeaderMenu";

function HowToTrade_Header() {
  return (
    <div>
      <div className="header-container">
        <div className="title-text-container">
          <p className="how_to_trade" style={{position: "absolute",top:"45px",left:"380px"}}>Learn How To Trade</p>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default HowToTrade_Header;
