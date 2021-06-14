import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";
import { apiUrl } from "./../Api/api";
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

  useEffect(() => {
    axios
      .post(apiUrl.info, `companycode=${currentStock.Symbol}`)
      .then((res) => {
        console.log(res);
        const data = res.data.info;
        setVolume(data.volume);
        setEps(data.trailingEps);
        setMarketCap(data.marketCap);
        setMarketPrice(data.regularMarketPrice);
        setDividendYeild((data.dividendYield * 100).toFixed(2));
        setPrevClose(data.previousClose);
        setDayRange({
          minimum: data.dayLow.toFixed(2),
          maximum: data.dayHigh.toFixed(2),
        });
        setYearRange({
          minimum: data.fiftyTwoWeekLow.toFixed(2),
          maximum: data.fiftyTwoWeekHigh.toFixed(2),
        });
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
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
        cellpadding="0"
        cellspacing="0"
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
            <TableRow className={classes.tableRow} id="Row1" id="Odd1">
              <TableCell
                className={classes.tableCell}
                id="od1"
                style={{ width: 100 }}
              >
                Day Range
              </TableCell>
              <TableCell className={classes.tableCell} id="od1">
                ${dayRange.minimum} - ${dayRange.maximum}
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Even1">
              <TableCell className={classes.tableCell}>52 Week Range</TableCell>
              <TableCell className={classes.tableCell}>
                ${yearRange.minimum} - ${yearRange.maximum}
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Odd1">
              <TableCell className={classes.tableCell} id="od1">
                Market Cap
              </TableCell>
              <TableCell className={classes.tableCell} id="od1">
                {convertToInternationalCurrencySystem(+marketCap)} USD
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Even1">
              <TableCell className={classes.tableCell}>Volume</TableCell>
              <TableCell className={classes.tableCell}>{volume}</TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Odd1">
              <TableCell className={classes.tableCell} id="od1">
                PE Ratio
              </TableCell>
              <TableCell className={classes.tableCell} id="od1">
                {eps > 0 ? `${(marketPrice / eps).toFixed(2)}` : "N/A"}
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
            <TableRow className={classes.tableRow} id="Odd1">
              <TableCell className={classes.tableCell} id="od1">
                CDP Climate Change
              </TableCell>
              <TableCell className={classes.tableCell} id="od1">
                A-
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Even1">
              <TableCell className={classes.tableCell}>
                Primary Exchange
              </TableCell>
              <TableCell className={classes.tableCell}>NASDAQ</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default StatsTable;
