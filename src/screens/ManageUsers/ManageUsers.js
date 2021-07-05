
import "./ManageUsers.css";
import React, { useState, useEffect } from "react";
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



function ManageUsers() {
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
    <div className="container" id="contscroll">
      <div>
        <div className="manageContainer">
          <h1 id="manage-users">Manage Users</h1>
          <TableContainer
          cellpadding="0"
          cellspacing="0"
          id="usertable"
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
                  S.N.
                </TableCell>
                <TableCell align="left" style={{ width: "0vw" }}>
                  Username
                </TableCell>
                <TableCell align="left" style={{ width: "0vw" }}>
                  Email
                </TableCell>
                <TableCell align="left" style={{ width: "0vw" }}>
                  Account Status
                </TableCell>
                <TableCell align="left" style={{ width: "0vw" }}>
                  Add/Remove
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
                  1.
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  user1
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  test1@gamil.com
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  YES
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  <button className="usertableButton">add/remove</button>
                </TableCell>
               
              </TableRow>
              <TableRow className={classes.tableRow} id="Even1">
                <TableCell className={classes.tableCell}>2.</TableCell>
                <TableCell className={classes.tableCell}>User2</TableCell>
                <TableCell className={classes.tableCell}>test2@gamil.com</TableCell>
                <TableCell className={classes.tableCell}>YES </TableCell>
                <TableCell className={classes.tableCell}>
                <button className="usertableButton">add/remove</button>
                </TableCell>
               
              </TableRow>
              <TableRow className={classes.tableRow} id="Odd1">
                <TableCell className={classes.tableCell} id="od1">
                  3.
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  user3
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  test3@gmail.com
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                 NO
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                <button className="usertableButton">add/remove</button>
                </TableCell>
               
              </TableRow>
              <TableRow className={classes.tableRow} id="Even1">
                <TableCell className={classes.tableCell}>4.</TableCell>
                <TableCell className={classes.tableCell}>
                  user4
                </TableCell>
                <TableCell className={classes.tableCell}>test4@gmail.com</TableCell>
                <TableCell className={classes.tableCell}>NO</TableCell>
                <TableCell className={classes.tableCell}>
                <button className="usertableButton">add/remove</button>
                </TableCell>
                
              </TableRow>
              <TableRow className={classes.tableRow} id="Odd1">
                <TableCell className={classes.tableCell} id="od1">
                5.
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  user5
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  test5@gmail.com
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                  YES
                </TableCell>
                <TableCell className={classes.tableCell} id="od1">
                <button className="usertableButton">add/remove</button>
                </TableCell>
                
              </TableRow>
              {/* <TableRow className={classes.tableRow} id="Even1">
                <TableCell className={classes.tableCell}>ETC</TableCell>
                <TableCell className={classes.tableCell}>Ethereum</TableCell>
                <TableCell className={classes.tableCell}>1,89,727.47</TableCell>
                <TableCell className={classes.tableCell}>+8.0063% </TableCell>
                <TableCell className={classes.tableCell}>21.802T </TableCell>
                <TableCell className={classes.tableCell}>2.723T</TableCell>
              </TableRow> */}
              {/* <TableRow className={classes.tableRow} id="Odd1">
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
              </TableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
