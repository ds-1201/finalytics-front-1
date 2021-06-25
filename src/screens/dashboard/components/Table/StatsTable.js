import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MuiTableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

function convertToInternationalCurrencySystem(labelValue) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
    : Math.abs(Number(labelValue));
}

const StatsTable = ({ currentStock }) => {
  const [dayRange, setDayRange] = useState({
    minimum: "",
    maximum: "",
  });
  const [yearRange, setYearRange] = useState({
    minimum: "",
    maximum: "",
  });
  const [dividendYeild, setDividendYeild] = useState("");
  const [marketCap, setMarketCap] = useState("");
  const [volume, setVolume] = useState("");
  const [eps, setEps] = useState("");
  const [prevClose, setPrevClose] = useState("");
  const [marketPrice, setMarketPrice] = useState("");
  const [open, setOpen] = useState("");

  useEffect(() => {
    let mount = true;
    let source = axios.CancelToken.source();
    axios
      .post(
        process.env.REACT_APP_URL_INFO,
        `companycode=${currentStock.Symbol}`,
        {
          auth: {
            username: process.env.REACT_APP_URL_USERNAME,
            password: process.env.REACT_APP_URL_PASSWORD,
          },
          cancelToken: source.token,
        }
      )
      .then((res) => {
        if (mount) {
          const data = res.data.info;
          setVolume(data.volume);
          setEps(data.trailingEps);
          setMarketCap(data.marketCap);
          setMarketPrice(data.regularMarketPrice);
          setDividendYeild((data.dividendYield * 100).toFixed(2));
          setPrevClose(data.previousClose);
          setOpen(data.open);
          setDayRange({
            minimum: data.dayLow.toFixed(2),
            maximum: data.dayHigh.toFixed(2),
          });
          setYearRange({
            minimum: data.fiftyTwoWeekLow.toFixed(2),
            maximum: data.fiftyTwoWeekHigh.toFixed(2),
          });
          return res;
        }
      })
      .catch((err) => {
        console.log(err.message);
        return err;
      });
    return () => {
      mount = false;
      source.cancel("Component unmount");
    };
  }, [currentStock]);

  const TableCell = withStyles({
    root: {
      borderBottom: "none",
    },
  })(MuiTableCell);
  const useStyles = makeStyles({
    table: {
      minWidth: 100,
    },
    tableRow: {
      height: 40,
    },
    tableCell: {
      padding: "0px 16px",
    },
  });

  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <h2 id="histitle">Key Stats</h2>
      </div>
      <TableContainer
        cellPadding="0"
        cellSpacing="0"
        id="statstable"
        component={Paper}
      >
        <Table className={classes.table} aria-label="simple table">
          <colgroup>
            <col style={{ width: "-100%" }} />
            <col style={{ width: "-10%" }} />
          </colgroup>

          <TableHead>
            <TableRow
              className={classes.tableRow}
              style={{ height: "0vw" }}
              id="Even1"
            >
              <TableCell align="left" style={{ width: "0vw" }}>
                Previous Close
              </TableCell>
              <TableCell align="left" style={{ width: "0vw" }}>
                ${prevClose}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.tableRow} id="Odd1">
              <TableCell className={classes.tableCell} id="od1">
                Open
              </TableCell>
              <TableCell className={classes.tableCell} id="od1">
                ${open}
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Even1">
              <TableCell className={classes.tableCell}>Day Range</TableCell>
              <TableCell className={classes.tableCell}>
                ${dayRange.minimum} - ${dayRange.maximum}
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Row1" id="Odd1">
              <TableCell
                className={classes.tableCell}
                id="od1"
                style={{ width: 100 }}
              >
                52 Week Range
              </TableCell>
              <TableCell className={classes.tableCell} id="od1">
                ${yearRange.minimum} - ${yearRange.maximum}
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Even1">
              <TableCell className={classes.tableCell}>Market Cap</TableCell>
              <TableCell className={classes.tableCell}>
                {convertToInternationalCurrencySystem(+marketCap)} USD
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Odd1">
              <TableCell className={classes.tableCell} id="od1">
                Volume
              </TableCell>
              <TableCell className={classes.tableCell} id="od1">
                {volume}
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Even1">
              <TableCell className={classes.tableCell}>PE Ratio</TableCell>
              <TableCell className={classes.tableCell}>
                {eps > 0 ? `${(marketPrice / eps).toFixed(2)}` : "N/A"}
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Odd1">
              <TableCell className={classes.tableCell} id="od1">
                EPS(TTM){" "}
              </TableCell>
              <TableCell className={classes.tableCell} id="od1">
                {eps}{" "}
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Even1">
              <TableCell className={classes.tableCell}>
                Dividend Yield
              </TableCell>
              <TableCell className={classes.tableCell}>
                {dividendYeild}%
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default StatsTable;
