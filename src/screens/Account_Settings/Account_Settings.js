import React from "react";
import "./Account_Settings.css";
import Account_Settings_Header from "../dashboard/components/Header/Account_Settings_Header";
import Form from "../Account_Settings/Form/Form";

function Account_Settings() {
  return (
    <div>
      <Account_Settings_Header />
      
      <div className="ascontainer">
      <Form />
      <div className="footer_bar">
          <button type="submit" className="button">Save & Close</button>
      </div>
      </div>
    </div>
  );
}

export default Account_Settings;
