import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "./Chart";
import "./ChartContainer.css";
import StockDetails from "./StockDetails";

function ChartContainer(props) {
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
    const getData = () => {
      axios
        .post(
          "https://finalyticsapi.fintractglobal.com/info/",
          `companycode=${props.currentStock.Symbol}`,
          {
            auth: {
              username: "testotp@fintract.co.uk",
              password: "IDhyYt96rse45ys0hg456jy0ti",
            },
          }
        )
        .then((response) => {
          console.log(response);
          const data = response.data.info;
          setPrevClose(data.previousClose);
          setCurrentValue(data.regularMarketPrice);
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    getData();
    const subscription = window.setInterval(() => {
      getData();
    }, 1000);
    return () => {
      clearTimeout(subscription);
    };
  }, [props.currentStock]);

  useEffect(() => {
    let mount = true;
    const source = axios.CancelToken.source();
    axios
      .post(
        "https://finalyticsapi.fintractglobal.com/stocks-graph/",
        `companycode=${props.currentStock.Symbol}&period=${range}&interval=${interval}`,
        {
          auth: {
            username: "testotp@fintract.co.uk",
            password: "IDhyYt96rse45ys0hg456jy0ti",
          },
          cancelToken: source.token,
        }
      )
      .then((res) => {
        if (mount) {
          for (const prop in res.data.TimeStamp) {
            setDuration(res.data.TimeStamp[prop]);
          }
          setStocks(res.data.Close);
        }
        return res;
      })
      .catch((err) => {
        console.log(err.message);
        return err;
      });
    return () => {
      mount = false;
      source.cancel("Component got unmounted");
    };
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

  return (
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
                  key={element}
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
  );
}

export default ChartContainer;
