import React from "react";
import "./CryptoTrends.css";
import CryptoList from "./../Table/CryptoList";
import CryptoStats from "./../Table/CryptoStats";

const CryptoTrends = ({ crypto }) => {
  return (
    <div className="cryptoTrends">
      <div>
        <CryptoList />
      </div>
      <div>
        <CryptoStats crypto={crypto} />
      </div>
    </div>
  );
};

export default CryptoTrends;
