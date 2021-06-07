import axios from "axios";

const checkData = (stock) => {
  axios
    .post(
      "https://finalyticsad.fintract.co.uk/stocks-graph/",
      `companycode=${stock.Symbol}&period=${"1d"}&interval=${"5m"}`
    )
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export { checkData };
