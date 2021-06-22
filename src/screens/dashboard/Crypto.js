import React from "react";
import CryptoChartContainer from "./components/Chart/CryptoChartContainer";
import CryptoTrends from "./components/Trends/CryptoTrends";
// import { cryptodata } from "./../../cryptoData";

const Crypto = ({ currentCrypto }) => {
  return (
    <React.Fragment>
      <div>
        <CryptoChartContainer crypto={currentCrypto} />
      </div>
      <h2 style={{ color: "white", textAlign: "center" }}>
        ({currentCrypto.Symbol}) {currentCrypto.Name}
      </h2>
      <div>
        <CryptoTrends crypto={currentCrypto} />
      </div>
    </React.Fragment>
  );
};

export default Crypto;
