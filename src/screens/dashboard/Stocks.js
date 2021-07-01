import React from "react";
import Slideshow from "./components/News/Slideshow";
import ChartContainer from "./components/Chart/ChartContainer";
import SectorTrends from "./components/Trends/SectorTrends";
import SentimentChart from "./sentiments/SentimentChart";
import "./Stocks.css";

const Stocks = ({ currentStock }) => {
  return (
    <React.Fragment>
      <div>
        <ChartContainer currentStock={currentStock} />
      </div>
      <div>
        <SectorTrends currentStock={currentStock} />
      </div>
      <div className="stock-update">
        <Slideshow />
        <SentimentChart currentStock={currentStock} />
      </div>
    </React.Fragment>
  );
};

export default Stocks;
