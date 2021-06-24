import React from "react";
import Slideshow from "./components/News/Slideshow";
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
      <div>
        <Slideshow></Slideshow>
      </div>
    </React.Fragment>
  );
};

export default Stocks;
