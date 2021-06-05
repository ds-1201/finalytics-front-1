import React, { useState, useEffect } from "react";
import "./SectorTrends.css";
import { Data } from "./../../../../data";
import TrendChart from "./../Chart/TrendChart";
import StatsTable from "./../Table/StatsTable";

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

const SectorTrends = ({ currentStock }) => {
  const [sectorStocks, setSectorStocks] = useState([]);

  useEffect(() => {
    const trendStocks = Data.filter((stock) => {
      if (stock.Sector === currentStock.Sector) {
        return stock;
      }
    });

    setSectorStocks(getRandom(trendStocks, 4));
  }, [currentStock]);
  return (
    <div id="flexdash">
      <div className="dashboard-trends-container" id="dashboard-flexchild">
        <h1 id="trends">Trends</h1>
        <div id="dashboard-graphs">
          {sectorStocks.map((sectorStock) => (
            <TrendChart key={sectorStock.Symbol} currentStock={sectorStock} />
          ))}
        </div>
      </div>
      <div className="dashboard-statistics">
        <StatsTable currentStock={currentStock} />
      </div>
    </div>
  );
};

export default SectorTrends;
