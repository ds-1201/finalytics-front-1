import React from "react";
import { Line } from "react-chartjs-2";
import "./Chart.css";

export default class Chart extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    var color;
    if (this.props.data[0] - this.props.data[this.props.data.length - 1] <= 0) {
      color = "#34a853";
    } else {
      color = "#EA4335";
    }

    return (
      <Line
        data={{
          labels: this.props.interval,
          datasets: [
            {
              label: this.props.name,

              data: this.props.data,
              // borderWidth:'3px',
              // backgroundColor:'rgba(1,1,1,0)',

              lineTension: 0.1,
              borderDashOffset: 0.0,
              borderCapStyle: "butt",
              fill: false,
              borderColor: color,
              borderDash: [],
              borderJoinStyle: "miter",
              backgroundColor: color,
              pointBackgroundColor: color,
              pointBorderColor: color,
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: color,
              pointHoverBorderColor: color,
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
            },
          ],
        }}
        options={{
          legend: {
            display: false,
            // labels: {
            //   fontColor: "white",
            // },
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.yLabel;
              },
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "#59588D",
                  display: this.props.main,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "#59588D",
                  display: this.props.main,
                },
              },
            ],
          },
        }}
      />
    );
  }
}
