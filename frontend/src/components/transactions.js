import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../App.css';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(username, email, amount, date, status) {
    return { username, email, amount, date, status };
}

const rows = [

    createData('Ahmed Ali', 'ahmedali@gmail.com', 2000, '29 Nov 2020 at 12:17', "success"),
    createData('Yasser Galal', 'yassergalal@gmail.com', 9500, '15 Oct 2020 at 19:17', "success"),
    createData('Mostafa Omer', 'mostafaomer@gmail.com', 1000, '10 Nov 2020 at 20:00', "success"),
    createData('Abdallah Ahmed', 'abdalla55@gmail.com', 500, '15 Sep 2020 at 22:17', "success"),
    createData('Hager Ahmed', 'hager@gmail.com', 2000, '2 Aug 2020 at 21:32', "success"),

];

const useStyles = makeStyles({

    table: {
        minWidth: 700,
    },

});

function Transactions() {
    const classes = useStyles();

    return (
        <div className="App pushDown centered">

            <div className="container">
                <div className="row">

                    <div className="col-sm-2">
                        <h3>Transactions</h3>
                        <h6>Current Balance: 25000 EGY</h6>
                    </div>

                    <div className="col-sm-10">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>

                                        <StyledTableCell>Username</StyledTableCell>
                                        <StyledTableCell align="right">Account</StyledTableCell>
                                        <StyledTableCell align="right">Amount(EGY)</StyledTableCell>
                                        <StyledTableCell align="right">Date</StyledTableCell>
                                        <StyledTableCell align="right">Status</StyledTableCell>

                                    </TableRow>
                                </TableHead>

                                <TableBody>

                                    {rows.map((row) => (
                                        <StyledTableRow key={row.username}>

                                            <StyledTableCell component="th" scope="row">
                                                {row.username}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.email}</StyledTableCell>
                                            <StyledTableCell align="right">{row.amount}</StyledTableCell>
                                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                                            <StyledTableCell align="right">{row.status}</StyledTableCell>

                                        </StyledTableRow>
                                    ))}

                                </TableBody>

                            </Table>
                        </TableContainer>

                    </div>


                </div>
            </div>



        </div>
    );

}
export default Transactions;