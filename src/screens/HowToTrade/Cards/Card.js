import React from "react";
import "./Card.css";
import "../HowToTrade.js";
function Card({subTitle,title, imageUrl, body, ClickHandler, id}) {

  const onClickHandler = () => {
    ClickHandler(id)
  }

  return (
  <div className="card-container">
    <div className="">
      <img className="card-image" id="cdimage" src={imageUrl} alt="image" />
    </div>
    <div className="card-content">
      <h5>{subTitle}</h5>
    <div className="card-title">
      <h3>{title}</h3>
    </div>
    <div className="card-body" onClick={onClickHandler}>
      <p>{body}</p>
      <p className="read_more">Read more -</p>
    </div>
    </div>
  </div>
  );
}

export default Card;
