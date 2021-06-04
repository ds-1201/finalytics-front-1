import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import ChartContainer from "./components/Chart/ChartContainer";
import { Data } from "./../../data";
import TrendChart from "./components/Trends/Chart/TrendChart";
import StatsTable from "./components/Table/StatsTable";

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function Dashboard() {
  const [showStocks, showstocks] = useState(true);
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
  const [sectorStocks, setSectorStocks] = useState([]);

  useEffect(() => {
    const trendStocks = Data.filter((stock) => {
      if (stock.Sector === currentStock.Sector) {
        return stock;
      }
    });

    setSectorStocks(getRandom(trendStocks, 4));
  }, [currentStock]);

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
            <h2>CryptoCurrencies</h2>
          )}
        </div>
        <div id="flexdash">
          <div className="dashboard-trends-container" id="dashboard-flexchild">
            <h1 id="trends">Trends</h1>
            <div id="dashboard-graphs">
              {sectorStocks.map((sectorStock) => (
                <TrendChart
                  key={sectorStock.Symbol}
                  currentStock={sectorStock}
                />
              ))}
            </div>
          </div>
          <div className="dashboard-statistics">
            <StatsTable />
          </div>
        </div>
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

{
  /* <div id="g1">
            {sectorStocks.length > 0 ? (
              <TrendChart currentStock={sectorStocks[0]} />
            ) : (
              <h2>Sector Loading ...</h2>
            )}
          </div>
          <div id="g2">
            {sectorStocks.length > 0 ? (
              <TrendChart currentStock={sectorStocks[0]} />
            ) : (
              <h2>Sector Loading ...</h2>
            )}
          </div>
          <div id="g3">
            {sectorStocks.length > 0 ? (
              <TrendChart currentStock={sectorStocks[0]} />
            ) : (
              <h2>Sector Loading ...</h2>
            )}
          </div>
          <div id="g4">
            {sectorStocks.length > 0 ? (
              <TrendChart currentStock={sectorStocks[0]} />
            ) : (
              <h2>Sector Loading ...</h2>
            )}
          </div> */
}
