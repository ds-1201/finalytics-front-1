import React from "react";
import { Line } from "react-chartjs-2";

export default class SChart extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    var color;
    // if (this.props.currentValue - this.props.prevClose >= 0) {
    //   color = "#34a853";
    // } else {
    //   color = "#EA4335";
    // }
    color = "#FFF";

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
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "index",
            intersect: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "#FFF",
                  display: true,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "#FFF",
                  display: false,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
          onHover: (event, chartElement) => {
            event.target.style.cursor = chartElement[0] ? "pointer" : "default";
          },
          responsive: true,
        }}
      />
    );
  }
}
