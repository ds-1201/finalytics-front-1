import React, { useState, useEffect } from "react";
import "./TrendChart.css";
import axios from "axios";
import { apiUrl } from "./../Api/api";
import Chart from "./Chart";

const TrendChart = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showStocks, setShowstocks] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [duration, setDuration] = useState([]);
  const [range] = useState("1d");
  const [interval] = useState("1m");
  const [currentValue, setCurrentValue] = useState("");
  // const [startValue, setStartValue] = useState("");
  const [changePercent, setChangePercent] = useState("");
  const [prevClose, setPrevClose] = useState("");

  useEffect(() => {
    axios
      .post(apiUrl.info, `companycode=${props.currentStock.Symbol}`)
      .then((response) => {
        const data = response.data.info;
        setPrevClose(data.previousClose);
        setCurrentValue(data.regularMarketPrice);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.currentStock]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .post(
        apiUrl.stocks,
        `companycode=${props.currentStock.Symbol}&period=${range}&interval=${interval}`
      )
      .then((res) => {
        for (const prop in res.data.TimeStamp) {
          setDuration(res.data.TimeStamp[prop]);
        }
        setStocks(res.data.Close);
        setShowstocks(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [props.currentStock, range, interval]);

  useEffect(() => {
    const num = ((+currentValue - +prevClose) / +prevClose) * 100;
    const newPercent = (Math.round(num * 100) / 100).toFixed(2);
    setChangePercent(newPercent);
  }, [currentValue, prevClose]);

  return (
    <div className="trendChart">
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && showStocks && (
        <React.Fragment>
          <div className="trendChart__data">
            <p>{props.currentStock.Symbol}</p>
            <p
              className={
                changePercent > 0
                  ? "trendChart__percentGreen"
                  : "trendChart__percentRed"
              }
            >
              {changePercent < 0 ? "-" : "+"}
              {Math.abs(changePercent)}%
            </p>
          </div>
          <Chart
            data={stocks}
            interval={duration}
            name={props.currentStock.Name}
            main={false}
            prevClose={prevClose}
            currentValue={currentValue}
          />
        </React.Fragment>
      )}
      {!isLoading && !showStocks && (
        <p>
          Data not found Server Error {props.currentStock.Name}{" "}
          {props.currentStock.Symbol}
        </p>
      )}
    </div>
  );
};

export default TrendChart;
