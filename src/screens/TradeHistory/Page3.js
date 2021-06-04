import React from "react";
import "./Trade_History.css";
import Trade_History_Header from "../dashboard/components/Header/Trade_History_Header";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MuiTableCell from "@material-ui/core/TableCell";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { positions } from '@material-ui/system';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const TableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(MuiTableCell);
const useStyles = makeStyles({
    table: {
        minWidth: 720,
    },
    tableRow: {
        height: 40
    },
    tableCell: {
        padding: "0px 16px"
    }
});
function Page3() {
    const classes = useStyles();

    return (
        <div>
            <Trade_History_Header />
            <TableContainer cellpadding="0" cellspacing="0" id="tradetablep" component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <colgroup>
                        <col style={{ width: '-100%' }} />
                        <col style={{ width: '-10%' }} />
                    </colgroup>

                    <TableHead>
                        <TableRow className={classes.tableRow} style={{ height: '0vw' }} id="Even">
                            <TableCell align="left" style={{ width: '0vw' }}>Date</TableCell>
                            <TableCell align="left" style={{ width: '0vw' }}>Trading Pair</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className={classes.tableRow} id="Row1" id="Odd">
                            <TableCell className={classes.tableCell} id="od" style={{ width: 100 }}>01/02/2021</TableCell>
                            <TableCell className={classes.tableCell} id="od">

                            </TableCell>
                        </TableRow>
                        <TableRow className={classes.tableRow} id="Even">
                            <TableCell className={classes.tableCell}>01/02/2021</TableCell>
                            <TableCell className={classes.tableCell}></TableCell>
                        </TableRow>
                        <TableRow className={classes.tableRow} id="Odd">
                            <TableCell className={classes.tableCell} id="od">01/02/2021</TableCell>
                            <TableCell className={classes.tableCell} id="od"></TableCell>
                        </TableRow>
                        <TableRow className={classes.tableRow} id="Even">
                            <TableCell className={classes.tableCell}>01/02/2021</TableCell>
                            <TableCell className={classes.tableCell}></TableCell>
                        </TableRow>
                        <TableRow className={classes.tableRow} id="Odd">
                            <TableCell className={classes.tableCell} id="od">01/02/2021</TableCell>
                            <TableCell className={classes.tableCell} id="od"></TableCell>
                        </TableRow>
                        <TableRow className={classes.tableRow} id="Even">
                            <TableCell className={classes.tableCell}>01/02/2021</TableCell>
                            <TableCell className={classes.tableCell}></TableCell>
                        </TableRow>
                        <TableRow className={classes.tableRow} id="Odd">
                            <TableCell className={classes.tableCell} id="od">01/02/2021</TableCell>
                            <TableCell className={classes.tableCell} id="od"></TableCell>
                        </TableRow>
                        <TableRow className={classes.tableRow} id="Even">
                            <TableCell className={classes.tableCell}>01/02/2021</TableCell>
                            <TableCell className={classes.tableCell}></TableCell>
                        </TableRow>
                        <TableRow className={classes.tableRow} id="Odd">
                            <TableCell className={classes.tableCell} id="od">01/02/2021</TableCell>
                            <TableCell className={classes.tableCell} id="od"></TableCell>
                        </TableRow>
                        <TableRow className={classes.tableRow} id="Even">
                            <TableCell className={classes.tableCell} id="">

                                <Link id="p1" to="/TradeHistory">1</Link>
                                <Link id="p2" to="/Page2">2</Link>
                                <Link id="p3" to="/Page3">3</Link>
                                <Link id="p4" to="/Page4">4</Link>
                                <Link id="p5" to="/Page5">5</Link>
                                <Link id="p6" to="/Page6">6</Link>

                            </TableCell>

                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
export default Page3
