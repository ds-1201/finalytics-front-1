import React, { useState } from "react";
import Header from "./components/Wallet_Header";
import Subtext from "./components/Subtext";
import WithdrawalButton from "./components/WithdrawalButton";
import logo from "./assets/visa.png";
import platinum from "./assets/Platinum.png";
import mcm from "./assets/mcm-logo.png";
import stext1 from "./assets/sample-text-1.png";
import stext2 from "./assets/sample-text-2.png";
import "./Wallet.css";

function Wallet(props) {
  return (
    <div className="container" id="contscroll">
      <div id="top-container">
        <Header name={"Wallet"} />

        <div className="main-container">
          <div className="cards-container">
            <div className="balance-card">
              <div className="balance-card-header">
                <div className="notif-mark"> </div>
                <div className="text-1"> Available Balance</div>
              </div>

              <div className="text-2">
                <span>xxxxxx</span>
              </div>
            </div>
            <Subtext context="Your Saved Accounts" id="ysa" />
            <div className="bank-cards-container">
              <div className="visa-card">
                <div className="visa-logo">
                  <img src={logo} />
                </div>
                <div className="sub-line">
                  <img src={platinum} />
                </div>
                <div className="sample-text">
                  <span>
                    <img src={stext1} />
                  </span>{" "}
                  <span>
                    <img src={stext1} />
                  </span>
                  <span>
                    <img src={stext1} />
                  </span>{" "}
                  <span>
                    <img src={stext1} />
                  </span>
                </div>
              </div>
              <div className="platinum-card">
                <div className="visa-logo">
                  <img src={mcm} />
                </div>
                <div className="sub-line">
                  <img src={platinum} />
                </div>
                <div className="sample-text">
                  <span>
                    <img src={stext1} />
                  </span>{" "}
                  <span>
                    <img src={stext1} />
                  </span>
                  <span>
                    <img src={stext1} />
                  </span>{" "}
                  <span>
                    <img src={stext1} />
                  </span>
                </div>
              </div>
            </div>
            <Subtext context="Withdrawal Options" />
            <div className="button-container">
              <WithdrawalButton bg="#272663" txtcolor="#53B9EA" txt="FIAT" />
              <WithdrawalButton bg="#53B9EA" txtcolor="#272663" txt="CRYPTO" />
            </div>
          </div>
          <div className="user-container">
            <div className="image-container">
              <img
                src={process.env.PUBLIC_URL + "/default-profile.jpeg"}
                alt="avatar"
                className="user-image"
              />
            </div>
            <div className="text-4">User</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
