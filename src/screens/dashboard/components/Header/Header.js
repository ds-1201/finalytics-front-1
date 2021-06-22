import React from "react";
import Dashboard from "../../Dashboard";
import "./Header.css";
import HeaderMenu from "./HeaderMenuDash";

function Header(props) {
  console.log(props.stocks);
  return (
    <div className="header-container">
      <div className="title-text-container">
        <p className="header-title-text">Dashboard</p>
      </div>
      <div>
        <HeaderMenu
          update={props.update}
          stocks={props.stocks}
          // username={props.username}
        />
      </div>
    </div>
  );
}

export default Header;
