import React from "react";
import "./Trade_History.css";
import Trade_Header from "../dashboard/components/Header/Trade_History_Header";
import Trade_Table from "./Trade_Table"
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
import { withStyles } from '@material-ui/core/styles';
import { useState } from "react";
import DatePicker from "react-datepicker";
import { date } from "react-datepicker";
import { handleDateSelect } from "react-datepicker";
import { handleDateChange } from "react-datepicker";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css"

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
        height: 30
    },
    tableCell: {
        padding: "0vh 2.5vw"
    }
});

export default function Table1() {
    const classes = useStyles();
    // const [data, setData] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // const [selectedFile, setSelectedFile] = useState();
    // const [isFilePicked, setIsFilePicked] = useState(false);

    return (
        <div className="date_price">
            <Trade_Header />
            <Trade_Table />
            <div id="tradetable2">
                <div id="tabhead">
                    <h1 id="datestyle">Date</h1>
                    <div>
                        <h2 id="from">From</h2>
                        <h2 id="to" >To</h2>
                    </div>
                    <div>
                        <DatePicker id="datefrom" selected={startDate} onChange={date => setStartDate(date)} />
                        <DatePicker id="dateto" selected={endDate} onChange={date => setEndDate(date)} />
                    </div>
                    <div>
                        <h4 id="buy">Buy Price</h4>
                        <h4 id="sell">Sell Price</h4>
                    </div>
                    <div>
                        <h3 id="from1">From</h3>
                        <h3 id="to1">To</h3>
                        <h3 id="from2">From</h3>
                        <h3 id="to2">To</h3>
                    </div>
                    <div>
                        <div id="r1">
                            <TextField id="range1" label="0.0" variant="outlined" />
                        </div>
                        <div id="r2">
                            <TextField id="range2" label="0.0" variant="outlined" />
                        </div>
                        <div id="r3">
                            <TextField id="range3" label="0.0" variant="outlined" />
                        </div>
                        <div id="r4">
                            <TextField id="range4" label="0.0" variant="outlined" />
                        </div>
                        <div id="r5">
                            <svg id="filter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><path d="M4 10h7.09a6 6 0 0011.82 0H44a1 1 0 000-2H22.91a6 6 0 00-11.82 0H4a1 1 0 000 2zm13-5a4 4 0 11-4 4 4 4 0 014-4zm27 18h-7.09a6 6 0 00-11.82 0H4a1 1 0 000 2h21.09a6 6 0 0011.82 0H44a1 1 0 000-2zm-13 5a4 4 0 114-4 4 4 0 01-4 4zm13 10H22.91a6 6 0 00-11.82 0H4a1 1 0 000 2h7.09a6 6 0 0011.82 0H44a1 1 0 000-2zm-27 5a4 4 0 114-4 4 4 0 01-4 4z" data-name="Layer 15" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
