import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Stocks from "./Stocks";
import Crypto from "./Crypto";

function Dashboard() {
  const [showStocks, setShowStocks] = useState(true);
  const [clicked, setClicked] = useState(0);
  const [currentStock, setCurrentStock] = useState({
    Symbol: "ABC",
    Name: "AmerisourceBergen Corporation Common Stock",
    Country: "United States",
    "IPO Year": "",
    Volume: 1145671,
    Sector: "Health Care",
    Industry: "Other Pharmaceuticals",
  });
  const [currentCrypto, setCurrentCrypto] = useState({
    Symbol: "BTC",
    Name: "Bitcoin",
  });

  useEffect(() => {
    if (clicked === 1) {
      setShowStocks(false);
    } else {
      setShowStocks(true);
    }
  }, [clicked]);

  const onClickHandler = (id) => {
    setClicked(id);
  };

  return (
    <div className="container" id="contscroll">
      <div>
        <Header
          update={showStocks ? setCurrentStock : setCurrentCrypto}
          stocks={showStocks}
        />
        <div className="wallet-list-container">
          <Button
            name="Stocks"
            id={0}
            className={
              clicked === 0 ? "option-button selected" : "option-button"
            }
            onClick={onClickHandler}
          />
          <Button
            name="CryptoCurrencies"
            id={1}
            className={
              clicked === 1 ? "option-button selected" : "option-button"
            }
            onClick={onClickHandler}
          />
        </div>
        {showStocks ? (
          <Stocks currentStock={currentStock} />
        ) : (
          <Crypto currentCrypto={currentCrypto} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
