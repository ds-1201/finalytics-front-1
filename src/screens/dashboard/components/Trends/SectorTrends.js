import React, { useState, useEffect } from "react";
import "./SectorTrends.css";
import { Data } from "./../../../../data";
import TrendChart from "./../Chart/TrendChart";
import StatsTable from "./../Table/StatsTable";
import axios from "axios";
import { apiUrl } from "./../Api/api";

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

// async function getMultiple(stocks) {
//   let users = [];
//   await Promise.all(
//     stocks.map((obj) =>
//       axios
//         .post(
//           apiUrl.stocks,
//           `companycode=${obj.Symbol}&period=${"1d"}&interval=${"5m"}`
//         )
//         .then((response) => {
//           // do something with response
//           users.push(response);
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//     )
//   );
//   return users;
// }

const SectorTrends = ({ currentStock }) => {
  const [sectorStocks, setSectorStocks] = useState([]);

  useEffect(() => {
    const trendStocks = Data.filter((stock) => {
      if (stock.Sector === currentStock.Sector) {
        return stock;
      }
    });
    // const tStocks = getRandom(trendStocks, 10);
    // const getS = async () => {
    //   let s = await getMultiple(tStocks);
    //   return s;
    // };

    // console.log(getS());
    // while (s.length >= 4) {
    //   s = getStocks(getRandom(trendStocks, 10));
    // }

    // console.log();
    // console.log(result);
    // console.log(errorArray);
    // setSectorStocks(result);
    setSectorStocks(getRandom(trendStocks, 4));
  }, [currentStock]);
  return (
    <div id="flexdash">
      <div className="stocks-trends-container" id="stocks-flexchild">
        <h1 id="trends">Trends</h1>
        <div id="stocks-graphs">
          {sectorStocks.map((sectorStock) => (
            <TrendChart key={sectorStock.Symbol} currentStock={sectorStock} />
          ))}
        </div>
      </div>
      <div className="stocks-statistics">
        <StatsTable currentStock={currentStock} />
      </div>
    </div>
  );
};

export default SectorTrends;
