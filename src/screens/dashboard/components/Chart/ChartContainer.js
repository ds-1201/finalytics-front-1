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
  const [startValue, setStartValue] = useState("");
  const [changePercent, setChangePercent] = useState("");
  const [range, setRange] = useState("1d");
  const [interval, setInterval] = useState("5m");
  const [currentRange, setCurrentRange] = useState("1d");
  const Rangeoptions = ["1d", "5d", "1mo", "6mo", "ytd", "1y", "5y", "max"];
  const Intervaloptions = {
    "1d": "5m",
    "5d": "30m",
    "1mo": "1d",
    "6mo": "1d",
    ytd: "1d",
    "1y": "1d",
    "5y": "1d",
    max: "1d",
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .post(
        "https://finaapi.fintract.co.uk/stocks-graph/",
        `companycode=${props.currentStock.Symbol}&period=${range}&interval=${interval}`
      )
      .then((res) => {
        for (const prop in res.data.TimeStamp) {
          setDuration(res.data.TimeStamp[prop]);
        }
        setStocks(res.data.Close);
        setStartValue(res.data.Close[0]);
        setCurrentValue(res.data.Close[res.data.Close.length - 1]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.currentStock, range]);

  useEffect(() => {
    const newPercent = (
      ((+currentValue - +startValue) / +startValue) *
      100
    ).toFixed(2);
    setChangePercent(newPercent);
  }, [currentValue, startValue]);

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

{
  /* useEffect(() => {
        console.log(props.currentStock);
        var new_obj = props.currentStock;
        const options = {
            method: 'GET',
            url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart',
            params: {interval: interval, symbol: props.currentStock.Symbol, range: range, region: 'US'},
            headers: {
            'x-rapidapi-key': process.env.REACT_APP_X_RAPID_API_KEY,
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
              }
          };
       axios.request(options)
        .then(res=>{
            new_obj.data = res.data.chart.result[0].indicators.quote[0].close;
            setStocks(res.data.chart.result[0].indicators.quote[0].close);
            setCurrentValue(res.data.chart.result[0].meta.regularMarketPrice);
            var new_arr = []
            {   
                res.data.chart.result[0].timestamp.map(element => {
                    var date = new Date(element*1000);
                    new_arr.push(date.toLocaleString());
                })
            }
            setDuration(new_arr);
            new_obj.currentValue = res.data.chart.result[0].meta.regularMarketPrice;
            new_obj.duration = new_arr;
            let new_array=[new_obj,...stockList];
            setStockList(new_array);
        })
        .catch(err=>{
            console.log(err);
        })
    },[props.currentStock,range]) */
}
