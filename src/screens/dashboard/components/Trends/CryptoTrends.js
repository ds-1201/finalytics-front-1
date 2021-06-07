import React, { useState } from "react";
import "./CryptoTrends.css";
import CryptoStats from "./../Table/CryptoStats";

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

const CryptoTrends = ({ crypto }) => {
  const [cryptos, SetCryptos] = useState(["btc", "eth", "btc", "eth"]);

  // useEffect(() => {
  //   const trendStocks = Data.filter((stock) => {
  //     if (stock.Sector === currentStock.Sector) {
  //       return stock;
  //     }
  //   });

  //   setSectorStocks(getRandom(trendStocks, 4));
  // }, [currentStock]);

  return (
    <div className="cryptoTrends">
      {/* <div className="crypto-trends-container">
        <h1 id="trends">Trends</h1>
        <div id="crypto-graphs">
          {sectorStocks.map((sectorStock) => (
            <TrendChart key={sectorStock.Symbol} currentStock={sectorStock} />
          ))}
        </div>
      </div> */}
      <div className="crypto-statistics">
        <CryptoStats crypto={crypto} />
      </div>
    </div>
  );
};

export default CryptoTrends;
