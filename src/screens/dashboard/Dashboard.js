import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import ChartContainer from "./components/Chart/ChartContainer";
import CryptoChartContainer from "./components/Chart/CryptoChartContainer";
// import TrendList from "./components/Trends/TrendList";
import SectorTrends from "./components/Trends/SectorTrends";
import CryptoTrends from "./components/Trends/CryptoTrends";

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
    Symbol: "btc",
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
        <Header update={setCurrentStock} />
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
        <div>
          {showStocks ? (
            <ChartContainer currentStock={currentStock} />
          ) : (
            <CryptoChartContainer crypto={currentCrypto} />
          )}
        </div>
        {showStocks ? (
          <SectorTrends currentStock={currentStock} />
        ) : (
          <CryptoTrends crypto={currentCrypto} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;

{
  /* <div>
  {/*
        <div>
          <h2 id="histitle">History</h2>
          </div>
          <table id="historytable">
            <tr >
              <th>icon</th>
              <th>Long heading text </th>
              <th>0.025</th>
              <th>01/01/2021</th>
            </tr>
            <tr>
              <td>icon</td>
              <td>Long heading text</td>
              <td>0.025</td>
              <td>01/01/2021</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>Long heading text</td>
              <td>0.025</td>
              <td>01/01/2021</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>Long heading text</td>
              <td>0.025</td>
              <td>01/01/2021</td>
            </tr>
            <tr>
              <td >icon</td>
              <td >Long heading text</td>
              <td>0.025</td>
              <td>01/01/2021</td>
            </tr>
          </table> 
</div>; */
}
