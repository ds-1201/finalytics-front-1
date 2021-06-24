import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "./Chart";
import "./ChartContainer.css";
import StockDetails from "./StockDetails";

function ChartContainer(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [duration, setDuration] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  // const [startValue, setStartValue] = useState("");
  const [changePercent, setChangePercent] = useState("");
  const [prevClose, setPrevClose] = useState("");
  const [range, setRange] = useState("1d");
  const [interval, setInterval] = useState("1m");
  const [currentRange, setCurrentRange] = useState("1d");
  const Rangeoptions = ["1d", "5d", "1mo", "6mo", "ytd", "1y", "5y", "max"];
  const Intervaloptions = {
    "1d": "1m",
    "5d": "1m",
    "1mo": "1d",
    "6mo": "1d",
    ytd: "1d",
    "1y": "1d",
    "5y": "1d",
    max: "1d",
  };

  useEffect(() => {
    axios
      .post(
        process.env.REACT_APP_URL_INFO,
        `companycode=${props.currentStock.Symbol}`,
        {
          auth: {
            username: process.env.REACT_APP_URL_USERNAME,
            password: process.env.REACT_APP_URL_PASSWORD,
          },
        }
      )
      .then((response) => {
        const data = response.data.info;
        setPrevClose(data.previousClose);
        setCurrentValue(data.regularMarketPrice);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }, [props.currentStock]);
  const getGraphData = () => {
    setIsLoading(true);
    axios
      .post(
        process.env.REACT_APP_URL_STOCKS_GRAPH,
        `companycode=${props.currentStock.Symbol}&period=${range}&interval=${interval}`,
        {
          auth: {
            username: process.env.REACT_APP_URL_USERNAME,
            password: process.env.REACT_APP_URL_PASSWORD,
          },
        }
      )
      .then((res) => {
        for (const prop in res.data.TimeStamp) {
          setDuration(res.data.TimeStamp[prop]);
        }
        setStocks(res.data.Close);
        setIsLoading(false);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  useEffect(() => {
    getGraphData();
  }, [props.currentStock, range, interval]);

  useEffect(() => {
    const num = ((+currentValue - +prevClose) / +prevClose) * 100;
    const newPercent = (Math.round(num * 100) / 100).toFixed(2);
    setChangePercent(newPercent);
  }, [currentValue, prevClose]);

  const handleClick = (e) => {
    setRange(e.target.id);
    setCurrentRange(e.target.id);
    setInterval(Intervaloptions[e.target.id]);
  };

  return !isLoading ? (
    <React.Fragment>
      <div className="chart-container-data">
        <div className="chart-container-data-current">
          <h3>{props.currentStock.Name}</h3>
          <h3
            className={
              changePercent > 0
                ? "trendChart__percentGreen"
                : "trendChart__percentRed"
            }
          >
            {changePercent < 0 ? "-" : "+"}
            {Math.abs(changePercent)}%
          </h3>
        </div>
      </div>
      <div className="chart-container-outer">
        <div className="chart-container">
          <div className="interval-btn-list">
            {Rangeoptions.map((element) => {
              return (
                <button
                  className={
                    currentRange === element
                      ? "interval-btn selected-btn"
                      : "interval-btn"
                  }
                  id={element}
                  onClick={handleClick}
                >
                  {element}
                </button>
              );
            })}
          </div>
          <Chart
            data={stocks}
            interval={duration}
            name={props.currentStock.Name}
            main={true}
            prevClose={prevClose}
            currentValue={currentValue}
          />
        </div>
        <StockDetails
          currentStock={props.currentStock}
          currentValue={currentValue}
        />
      </div>
    </React.Fragment>
  ) : (
    <h1 style={{ marginLeft: "30%", color: "white" }}>Loading...</h1>
  );
}

export default ChartContainer;
