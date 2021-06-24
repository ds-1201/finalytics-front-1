import React, { useState, useEffect } from "react";
import "./CryptoChartContainer.css";
import axios from "axios";
import Chart from "./Chart";

const CryptoChartContainer = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [duration, setDuration] = useState([]);
  const [values, setValues] = useState([]);
  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    setIsLoading(true);
    console.log(props.crypto.Symbol.toLowerCase());
    axios
      .post(
        process.env.REACT_APP_URL_Crypto_GRAPH,
        `crypto=${props.crypto.Symbol.toLowerCase()}`,
        {
          auth: {
            username: process.env.REACT_APP_URL_USERNAME,
            password: process.env.REACT_APP_URL_PASSWORD,
          },
        }
      )
      .then((res) => {
        const data = res.data.Crypto_data;

        setDuration(data.Date.reverse());
        setValues(data.Close.reverse());
        setIsLoading(false);
        setError(false);
        return () => {
          return res;
        };
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setIsLoading(false);
        return err;
      });
  }, [props.crypto]);

  return (
    <div className="cryptoChartContainer">
      {isLoading && <h2>Loading...</h2>}
      {!isLoading && !error && (
        <Chart
          name={props.crypto.Name}
          data={values}
          interval={duration}
          main={true}
        />
      )}
      {!isLoading && error && <h2>Data not found Server Error</h2>}
    </div>
  );
};

export default CryptoChartContainer;
