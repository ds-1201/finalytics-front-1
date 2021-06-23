import React, { useState, useEffect } from "react";
import "./Trends.css";
// import { Data } from "../../data";
import data from "./getTrendCharts";
import Chart from "./DisplayTrendChart";
// import TrendChart from "../dashboard/components/Chart/TrendChart";

// function getRandom(arr, n) {
//   var result = new Array(n),
//     len = arr.length,
//     taken = new Array(len);
//   if (n > len)
//     throw new RangeError("getRandom: more elements taken than available");
//   while (n--) {
//     var x = Math.floor(Math.random() * len);
//     result[n] = arr[x in taken ? taken[x] : x];
//     taken[x] = --len in taken ? taken[len] : len;
//   }
//   return result;
// }

function Trends() {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await data();
        setStocks(response);

        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    setIsLoading(true);
    getData();
  }, []);

  return (
    <div className="container" id="contscroll">
      <div>
        <div className="trends-container">
          <h1 id="trend">TRENDS</h1>
          {isLoading ? (
            <h1 style={{ color: "white", marginLeft: "50px" }}>Loading ...</h1>
          ) : (
            <div className="trends-graphs">
              {stocks.map((stock) => {
                return (
                  <div key={stock.symbol} className="trendChart">
                    <div className="trendChart__data">
                      <p>{stock.symbol}</p>
                    </div>
                    <Chart
                      data={stock.y_axis}
                      interval={stock.x_axis}
                      name={stock.name}
                      main={false}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trends;

// const [showStocks, showstocks] = useState(true);
//   const [currentStock, setCurrentStock] = useState({
//     Symbol: "ABC",
//     Name: "AmerisourceBergen Corporation Common Stock",
//     Country: "United States",
//     "IPO Year": "",
//     Volume: 1145671,
//     Sector: "Health Care",
//     Industry: "Other Pharmaceuticals",
//   });
//   const [sectorStocks, setSectorStocks] = useState([]);

//   useEffect(() => {
//     const trendStocks = Data.filter((stock) => {
//       return stock;
//     });

//     setSectorStocks(getRandom(trendStocks, 60));
//   }, [currentStock]);

//   return (
//     <div className="container" id="contscroll">
//       <div>
//         <div className= "trends-container">
//          <h1 id="trend">TRENDS</h1>
//           <div className="trends-graphs">
//             {sectorStocks.map((sectorStock) => (
//               <TrendChart key={sectorStock.Symbol} currentStock={sectorStock} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
