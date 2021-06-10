import React from "react";
import CryptoChartContainer from "./components/Chart/CryptoChartContainer";
import CryptoTrends from "./components/Trends/CryptoTrends";

const Crypto = ({ currentCrypto }) => {
  return (
    <React.Fragment>
      <div>
        <CryptoChartContainer crypto={currentCrypto} />
      </div>
      <div>
        <CryptoTrends crypto={currentCrypto} />
      </div>
    </React.Fragment>
  );
};

export default Crypto;
