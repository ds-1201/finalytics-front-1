import React, { useState } from "react";
import "./HeaderMenu.css";
import SearchBar from "../SearchBar/SearchBar";

import { Link, useHistory } from "react-router-dom";
function HeaderMenu(props) {
  let history = useHistory();
  const signout = (e) => {
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    history.replace("/");
  };
  const signup = (e) => {
    history.push("/signup");
  };

  return (
    <div className="menu-container">
      <div>
        <SearchBar
          className="search-imported"
          update={props.update}
          stocks={props.stocks}
        />
      </div>
      {/* <div className="union-container">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2ZM0 10C0 8.89543 0.895431 8 2 8C3.10457 8 4 8.89543 4 10C4 11.1046 3.10457 12 2 12C0.895431 12 0 11.1046 0 10ZM10 0C8.89543 0 8 0.895431 8 2C8 3.10457 8.89543 4 10 4C11.1046 4 12 3.10457 12 2C12 0.895431 11.1046 0 10 0ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10ZM18 0C16.8954 0 16 0.895431 16 2C16 3.10457 16.8954 4 18 4C19.1046 4 20 3.10457 20 2C20 0.895431 19.1046 0 18 0ZM16 10C16 8.89543 16.8954 8 18 8C19.1046 8 20 8.89543 20 10C20 11.1046 19.1046 12 18 12C16.8954 12 16 11.1046 16 10ZM2 16C0.895431 16 0 16.8954 0 18C0 19.1046 0.895431 20 2 20C3.10457 20 4 19.1046 4 18C4 16.8954 3.10457 16 2 16ZM8 18C8 16.8954 8.89543 16 10 16C11.1046 16 12 16.8954 12 18C12 19.1046 11.1046 20 10 20C8.89543 20 8 19.1046 8 18ZM18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16Z" fill="#5B5A99"/>
                </svg>
            </div> */}
      {localStorage.username == undefined ? (
        <div
          className="usercontainer2"
          style={{
            color: "white",
            fontWeight: "normal",
            marginRight: "2vw",
            marginLeft: "2vw",
            cursor: "pointer",
          }}
          onClick={signup}
        >
          Signup/Login
        </div>
      ) : (
        <div
          style={{
            width: "20vw",
            display: "flex",
            justifyContent: "space-around",
            marginRight: "2vw",
          }}
        >
          <div className="notification-sign-container" onClick={notifToggle}>
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 0C3.92954 0 2.98173 0.691642 2.65518 1.71108L0 10H10L7.34482 1.71108C7.01827 0.691641 6.07046 0 5 0ZM3.5 11C3.22386 11 3 11.2239 3 11.5C3 11.7761 3.22386 12 3.5 12H6.5C6.77614 12 7 11.7761 7 11.5C7 11.2239 6.77614 11 6.5 11H3.5Z"
                fill="white"
              />
            </svg>

            <p className="notification-number">15</p>
          </div>
          <div className="Notification">
            <div className="profile2"></div>
            <div className="menu2">
              <ul>
                <li>
                  <img src="/star.png"></img>
                  <a href="#"> Your order ID#1201 is pending </a>
                </li>
                <li>
                  <img src="/star.png"></img>
                  <a href="#"> Your order ID#1201 is placed</a>
                </li>
                <li>
                  <img src="/star.png"></img>
                  <a href="#"> order ID#1201 Cancelled </a>
                </li>
                <li>
                  <img src="/star.png"></img>
                  <a href="#"> your document verification is pending </a>
                </li>
                <li>
                  <img src="/star.png"></img>
                  <a href="#"> Alert: Tesla hit $2098.0 </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="usercontainer2" onClick={menuToggle}>
            <div className="profile-name-container">
              <div className="profile-pic">
                <img className="profile-img" src="/profile.jpg" />
              </div>
              <h3 className="profile-name">
                <b>User</b>{" "}
                <span className="down-arrow" style={{ marginLeft: "1.5px" }}>
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.44775 1.44794L4.49983 4.44794L1.5519 1.44794"
                      stroke="#5B5A99"
                      stroke-width="2"
                    />
                  </svg>
                </span>
              </h3>
            </div>
          </div>
          <div className="action">
            <div className="menu">
              <h3>
                Hi! {localStorage.username}
                <br></br>
                <span>Balance: 24,539$</span>
              </h3>
              <ul>
                <li>
                  <img src="/profile.png"></img>
                  <a href="#"> Profile </a>
                </li>
                <li>
                  <img src="/orders.png"></img>
                  <a href="#"> Your Orders </a>
                </li>
                <li>
                  <img src="/settings.png"></img>
                  <Link to={"/accountsettings"}> Settings </Link>
                </li>
                <li>
                  <img src="/help.png"></img>
                  <a href="#">Help </a>
                </li>
                <li onClick={signout}>
                  <img src="/signout.png"></img>
                  <a href="#"> Signout </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  function menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  }
  function notifToggle() {
    const toggleMenu = document.querySelector(".menu2");
    toggleMenu.classList.toggle("active");
  }
}

export default HeaderMenu;
