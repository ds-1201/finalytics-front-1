import React from "react";
import "./CryptoChartContainer.css";
import Chart from "./Chart";

const CryptoChartContainer = (props) => {
  return (
    <div className="cryptoChartContainer">
      {props.isLoading && <h2>Loading...</h2>}
      {!props.isLoading && !props.error && (
        <React.Fragment>
          <h3 className="crypto-main-heading">{props.name}</h3>
          <Chart
            currentValue={props.currentValue}
            prevClose={props.prevValue}
            name={props.name}
            data={props.values}
            interval={props.duration}
            main={true}
          />
        </React.Fragment>
      )}
      {!props.isLoading && props.error && <h2>Data not found Server Error</h2>}
    </div>
  );
};

export default CryptoChartContainer;
