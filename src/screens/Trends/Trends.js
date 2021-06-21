import React, { useState, useEffect } from "react";
import "./Trends.css";
import { Data } from "../../data";
import TrendChart from "../dashboard/components/Chart/TrendChart";

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

function Trade() {
  const [showStocks, showstocks] = useState(true);
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
      {
        return stock;
      }
    });

    setSectorStocks(getRandom(trendStocks, 60));
  }, [currentStock]);

  return (
    <div className="container" id="contscroll">
      <div>
        <div className="trends-container">
          <h1 id="trend">TRENDS</h1>
          <div className="trends-graphs">
            {sectorStocks.map((sectorStock) => (
              <TrendChart key={sectorStock.Symbol} currentStock={sectorStock} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trade;
