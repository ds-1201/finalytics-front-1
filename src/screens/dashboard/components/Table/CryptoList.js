import React, { useState, useEffect } from "react";
import "./CryptoList.css";
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

const CryptoList = () => {
  const TableCell = withStyles({
    root: {
      borderBottom: "none",
    },
  })(MuiTableCell);
  const useStyles = makeStyles({
    table: {
      minWidth: 200,
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
      <div className="cryptoList">
        <div>
          <h2 id="histitle">Cryptocurrencies</h2>
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
                  Symbol
                </TableCell>
                <TableCell align="left" style={{ width: "0vw" }}>
                  Name
                </TableCell>
                <TableCell align="left" style={{ width: "0vw" }}>
                  Price
                </TableCell>
                <TableCell align="left" style={{ width: "0vw" }}>
                  % Change
                </TableCell>
                <TableCell align="left" style={{ width: "0vw" }}>
                  Market Cap
                </TableCell>
                <TableCell align="left" style={{ width: "0vw" }}>
                  Volume
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={classes.tableRow} id="Row1" id="Odd1">
                <TableCell
                  className={classes.tableCell}
                  id="od1"
                  // style={{ width: 100 }}
                >
                  BTC
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  Bitcoin
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  26,66,108.00
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  +13.9645%
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  49.898T
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  3.849T
                </TableCell>
              </TableRow>
              <TableRow className={classes.tableRow} id="Even1">
                <TableCell className={classes.tableCell}>ETC</TableCell>
                <TableCell className={classes.tableCell}>Ethereum</TableCell>
                <TableCell className={classes.tableCell}>1,89,727.47</TableCell>
                <TableCell className={classes.tableCell}>+8.0063% </TableCell>
                <TableCell className={classes.tableCell}>21.802T </TableCell>
                <TableCell className={classes.tableCell}>2.723T</TableCell>
              </TableRow>
              <TableRow className={classes.tableRow} id="Odd1">
                <TableCell className={classes.tableCell} id="od1">
                  BTC
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  Bitcoin
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  26,66,108.00
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  +13.9645%
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  49.898T
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  3.849T
                </TableCell>
              </TableRow>
              <TableRow className={classes.tableRow} id="Even1">
                <TableCell className={classes.tableCell}>ETC</TableCell>
                <TableCell className={classes.tableCell}>Ethereum</TableCell>
                <TableCell className={classes.tableCell}>1,89,727.47</TableCell>
                <TableCell className={classes.tableCell}>+8.0063% </TableCell>
                <TableCell className={classes.tableCell}>21.802T </TableCell>
                <TableCell className={classes.tableCell}>2.723T</TableCell>
              </TableRow>
              <TableRow className={classes.tableRow} id="Odd1">
                <TableCell className={classes.tableCell} id="od1">
                  BTC
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  Bitcoin
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  26,66,108.00
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  +13.9645%
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  49.898T
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  3.849T
                </TableCell>
              </TableRow>
              <TableRow className={classes.tableRow} id="Even1">
                <TableCell className={classes.tableCell}>ETC</TableCell>
                <TableCell className={classes.tableCell}>Ethereum</TableCell>
                <TableCell className={classes.tableCell}>1,89,727.47</TableCell>
                <TableCell className={classes.tableCell}>+8.0063% </TableCell>
                <TableCell className={classes.tableCell}>21.802T </TableCell>
                <TableCell className={classes.tableCell}>2.723T</TableCell>
              </TableRow>
              <TableRow className={classes.tableRow} id="Odd1">
                <TableCell className={classes.tableCell} id="od1">
                  BTC
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  Bitcoin
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  26,66,108.00
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  +13.9645%
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  49.898T
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  3.849T
                </TableCell>
              </TableRow>
              <TableRow className={classes.tableRow} id="Even1">
                <TableCell className={classes.tableCell}>ETC</TableCell>
                <TableCell className={classes.tableCell}>Ethereum</TableCell>
                <TableCell className={classes.tableCell}>1,89,727.47</TableCell>
                <TableCell className={classes.tableCell}>+8.0063% </TableCell>
                <TableCell className={classes.tableCell}>21.802T </TableCell>
                <TableCell className={classes.tableCell}>2.723T</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
};

export default CryptoList;
