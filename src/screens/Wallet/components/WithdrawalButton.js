import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import "./WithdrawalButton.css";

function WithdrawalButton(props) {
  const buttonstyle = {
    width: "200px",
    height: "56px",
    background: props.bg,
    //textAlign: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: "32px",
    cursor: "pointer",
  };
  const textstyle = {
    margin: "auto",

    //paddingTop:"6%",
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "24px",
    /* identical to box height, or 133% */

    letterSpacing: "-0.002em",
    color: props.txtcolor,
  };

  return (
    <div className="w-button" style={buttonstyle}>
      <span style={textstyle}>{props.txt}</span>
    </div>
  );
}

export default WithdrawalButton;
