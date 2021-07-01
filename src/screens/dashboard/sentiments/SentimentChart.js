import React, { useState, useEffect } from "react";
import "./SentimentChart.css";
import SChart from "./SChart";
import axios from "axios";
const SentimentChart = (props) => {
  const [xAxis, setXAxis] = useState([]);
  const [yAxis, setYAxis] = useState([]);
  useEffect(() => {
    let mount = true;
    let source = axios.CancelToken.source();
    const body = {
      companycode: props.currentStock.Symbol,
    };
    axios
      .post("https://finalyticsapi.fintractglobal.com/graph-sentiment/", body, {
        auth: {
          username: "testotp@fintract.co.uk",
          password: "IDhyYt96rse45ys0hg456jy0ti",
        },
        cancelToken: source.token,
      })
      .then((res) => {
        if (mount) {
          const data = res.data;
          setXAxis(data.Date);
          setYAxis(data.polarity);
        }
        return res;
      })
      .catch((err) => {
        console.log(err.message);
        return err;
      });

    return () => {
      mount = false;
      source.cancel("Component unmount");
    };
  }, [props.currentStock]);
  return (
    <div className="sentimentsChart">
      <h3>Twitter Sentiments</h3>
      <SChart data={yAxis} interval={xAxis} name={props.currentStock.Name} />
    </div>
  );
};

export default SentimentChart;
