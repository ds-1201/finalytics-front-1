import React, { useRef, useEffect } from "react";
import "./HeaderMenu.css";
import SearchBar from "../SearchBar/SearchBar";

import { Link, useHistory } from "react-router-dom";
function HeaderMenu(props) {
  const menuActive = useRef();
  const menu2Active = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuActive.current && !menuActive.current.contains(event.target)) {
        const menu = document.querySelector(".menu");
        if (menu.classList.contains("active")) {
          menu.classList.remove("active");
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuActive]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menu2Active.current && !menu2Active.current.contains(event.target)) {
        const menu = document.querySelector(".menu2");
        if (menu.classList.contains("active")) {
          menu.classList.remove("active");
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu2Active]);

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
      <div className="search-bar">
        <SearchBar
          className="search-imported"
          update={props.update}
          stocks={props.stocks}
        />
      </div>
      {localStorage.username === undefined ? (
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
        <React.Fragment>
          <div
            ref={menu2Active}
            className="notification-sign-container"
            onClick={notifToggle}
          >
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

          <div ref={menuActive} className="usercontainer3" onClick={menuToggle}>
            <div className="profile-name-container">
              <div className="profile-pic">
                <img className="profile-img" src="/default-profile.png" />
              </div>

              {/* <h3 className="profile-name"><b>User</b> <span className="down-arrow">
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.44775 1.44794L4.49983 4.44794L1.5519 1.44794" stroke="#5B5A99" stroke-width="2" />
                    </svg>
                </span></h3> */}
              {/*
                    props.username?<span className="signup-text" onClick={signout}>Hi {props.username}</span> :
                    <Link to="/signup"> <span className="signup-text">Sign Up/Login</span>
                    </Link> 
    
                */}

              <h3 className="profile-name">
                <b>User</b>{" "}
                <span className="down-arrow">
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
                {localStorage.username}
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
        </React.Fragment>
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
