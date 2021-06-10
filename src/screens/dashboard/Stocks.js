import React from "react";
import ChartContainer from "./components/Chart/ChartContainer";
import SectorTrends from "./components/Trends/SectorTrends";

const Stocks = ({ currentStock }) => {
  return (
    <React.Fragment>
      <div>
        <ChartContainer currentStock={currentStock} />
      </div>
      <div>
        <SectorTrends currentStock={currentStock} />
      </div>
    </React.Fragment>
  );
};

export default Stocks;
