import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Stocks from "./Stocks";
import Crypto from "./Crypto";
// import Slideshow from "./components/News/Slideshow";

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
    Symbol: "DOGE",
    Name: "Dogecoin",
  });

  useEffect(() => {
    if (clicked === 1) {
      setShowStocks(false);
    } else {
      setShowStocks(true);
    }
  }, [clicked]);

  const stockC =
    typeof currentStock === "object" ? (
      <Stocks currentStock={currentStock} />
    ) : (
      <h1 style={{ color: "white", margin: "auto" }}>No stock Found :(</h1>
    );
  const cryptoC =
    typeof currentCrypto === "object" ? (
      <Crypto currentCrypto={currentCrypto} />
    ) : (
      <h1>No Cryptos Found :(</h1>
    );
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
        {showStocks ? stockC : cryptoC}
      </div>
    </div>
  );
}

export default Dashboard;
