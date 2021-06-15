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

const CryptoStats = ({ crypto }) => {
  const [dayRange, setDayRange] = useState({
    minimum: "",
    maximum: "",
  });
  const [yearRange, setYearRange] = useState({
    minimum: "",
    maximum: "",
  });
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
        <h2 id="histitle"> Price Statistics</h2>
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
                Price
              </TableCell>
              <TableCell align="left" style={{ width: "0vw" }}>
                $649.78
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
                Price Change
              </TableCell>
              <TableCell className={classes.tableCell} id="od1">
                $4962.61
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Even1">
              <TableCell className={classes.tableCell}>Year Range</TableCell>
              <TableCell className={classes.tableCell}>$200-$300</TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Odd1">
              <TableCell className={classes.tableCell} id="od1">
                Market Cap
              </TableCell>
              <TableCell className={classes.tableCell} id="od1">
                0.07641
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Even1">
              <TableCell className={classes.tableCell}>Volume</TableCell>
              <TableCell className={classes.tableCell}>8.22M</TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Odd1">
              <TableCell className={classes.tableCell} id="od1">
                24 Low/24 High
              </TableCell>
              <TableCell className={classes.tableCell} id="od1">
                $31,114.44 / $36,337.67
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Even1">
              <TableCell className={classes.tableCell}>
                Trading Volume
              </TableCell>
              <TableCell className={classes.tableCell}>
                $51,920,293,702.68
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Odd1">
              <TableCell className={classes.tableCell} id="od1">
                Market Dominance
              </TableCell>
              <TableCell className={classes.tableCell} id="od1">
                43.30%
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableRow} id="Even1">
              <TableCell className={classes.tableCell}>Market Rank</TableCell>
              <TableCell className={classes.tableCell}>#1</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default CryptoStats;
