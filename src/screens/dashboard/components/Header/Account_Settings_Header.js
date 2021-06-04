import React from "react";
// using same css for all the header styling
import "./Header.css";
import HeaderMenu from "./HeaderMenu";

function Account_Settings() {
  return (
    <div>
      <div className="header-container_ac">
        <div className="title-text-container">
          <p className="account_settings">Account Settings</p>
        </div>
        <div>
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
}

export default Account_Settings;
