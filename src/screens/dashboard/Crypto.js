import React from "react";
import CryptoChartContainer from "./components/Chart/CryptoChartContainer";
import CryptoTrends from "./components/Trends/CryptoTrends";
import cryptos from "cryptocurrencies";

const Crypto = ({ currentCrypto }) => {
  return (
    <React.Fragment>
      <h2 style={{ color: "white", textAlign: "center" }}>
        {cryptos[currentCrypto]}
      </h2>
      {/* <div>
        <CryptoChartContainer crypto={currentCrypto} />
      </div> */}
      <div>
        <CryptoTrends crypto={currentCrypto} />
      </div>
    </React.Fragment>
  );
};

export default Crypto;
