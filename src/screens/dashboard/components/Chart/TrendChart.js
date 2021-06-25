import React, { useState, useEffect } from "react";
import "./TrendChart.css";
import axios from "axios";
import Chart from "./Chart";

const TrendChart = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showStocks, setShowstocks] = useState(false);
  const [stocks, setStocks] = useState([]);
  const [duration, setDuration] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  // const [startValue, setStartValue] = useState("");
  const [changePercent, setChangePercent] = useState("");
  const [prevClose, setPrevClose] = useState("");

  useEffect(() => {
    let mount = true;
    const source = axios.CancelToken.source();
    axios
      .post(
        process.env.REACT_APP_URL_INFO,
        `companycode=${props.currentStock.Symbol}`,
        {
          auth: {
            username: process.env.REACT_APP_URL_USERNAME,
            password: process.env.REACT_APP_URL_PASSWORD,
          },
          cancelToken: source.token,
        }
      )
      .then((response) => {
        if (mount) {
          const data = response.data.info;
          setPrevClose(data.previousClose);
          setCurrentValue(data.regularMarketPrice);
        }
        return response;
      })
      .catch((error) => {
        console.log(error.message);
        return error;
      });
    return () => {
      mount = false;
      source.cancel();
    };
  }, [props.currentStock]);

  useEffect(() => {
    setIsLoading(true);
    let mount = true;
    const source = axios.CancelToken.source();
    axios
      .post(
        process.env.REACT_APP_URL_STOCKS_GRAPH,
        `companycode=${
          props.currentStock.Symbol
        }&period=${"1d"}&interval=${"1m"}`,
        {
          auth: {
            username: process.env.REACT_APP_URL_USERNAME,
            password: process.env.REACT_APP_URL_PASSWORD,
          },
          cancelToken: source.token,
        }
      )
      .then((res) => {
        if (mount) {
          setShowstocks(true);
          for (const prop in res.data.TimeStamp) {
            setDuration(res.data.TimeStamp[prop]);
          }
          setStocks(res.data.Close);
          setIsLoading(false);
        }
        return res;
      })
      .catch((err) => {
        setIsLoading(false);
        return err;
      });
    return () => {
      mount = false;
      source.cancel("Component unmount");
    };
  }, [props.currentStock]);

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
        <p style={{ display: "none" }}>
          Data not found Server Error {props.currentStock.Name}{" "}
          {props.currentStock.Symbol}
        </p>
      )}
    </div>
  );
};

export default TrendChart;
