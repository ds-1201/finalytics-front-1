import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";
// import Popup from './Popup';
import "./SideBar.css";

function SideBar(props) {
  const [clicked, setClicked] = useState(0);
  const list = [
    "Dashboard",
    "Wallet",
    "Trends",
    "Trade History",
    "How To Trade",
    "Account Settings",
    "Manage Users"
  ];
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, []);

  const onClickHandler = (id) => {
    setClicked(id);
    var address = list[id].toLowerCase().split(" ").join("");
    history.push(`/${address}/`);
  };
  return (
    <>
      <div className="container">
        <div className="sidebar-container">
          <img
            className="img"
            src="/FG LOGO_white.png"
            alt="Fintract-global-logo"
          />
          {localStorage.username === undefined ? (
            <Button
              key={0}
              id={0}
              name={"Dashboard"}
              active={clicked}
              onClickHandler={onClickHandler}
            />
          ) : (
            list.map((element, i) => {
              return (
                <Button
                  key={i}
                  id={i}
                  name={element}
                  active={clicked}
                  onClickHandler={onClickHandler}
                />
              );
            })
          )}
        </div>
        <div className="child-container">{props.children}</div>
      </div>
    </>
  );
}

export default SideBar;
