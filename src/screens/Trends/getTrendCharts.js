import { Data } from "./../../data";
import axios from "axios";

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const getData = async (company) => {
  try {
    const res = await axios.post(
      process.env.REACT_APP_URL_STOCKS_GRAPH,
      `companycode=${company.Symbol}&period=${"1d"}&interval=${"1m"}`
    );
    return { res, name: company.Name, symbol: company.Symbol };
  } catch (err) {
    return null;
  }
};

const getTrendsData = async () => {
  const trendStocks = [];
  const trendStockstemp = [];
  const stocks = getRandom(Data, 60);
  const requests = stocks.map((stock) => {
    return getData(stock);
  });
  try {
    const result = await axios.all(requests);
    result.forEach((stock) => {
      if (stock !== null) {
        let name = stock.name;
        let symbol = stock.symbol;
        let x_axis;
        let y_axis = stock.res.data.Close;
        for (const prop in stock.res.data.TimeStamp) {
          x_axis = stock.res.data.TimeStamp[prop];
        }
        const temp = {
          x_axis,
          y_axis,
          symbol,
          name,
        };
        trendStockstemp.push(temp);
      }
    });
    return trendStockstemp;
    // const request2 = trendStockstemp.map(s =>
    //   axios.post(process.env.REACT_APP_URL_INFO, `companycode=${s.symbol}`)
    // )
    // const result2 = axios.all(request2);
  } catch (err) {
    return err;
  }
};

export default getTrendsData;
