import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ImageIcon from "@material-ui/icons/Image";
import SimpleDialogDemo from "./DialogPic.js";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#003",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(email, time, type, image) {
//   return { email, time, type, image };
// }

// const rows = [
//   createData("123@gmail.com", "5.00 pm 12th July 2020", "Sleeping", "123"),
//   createData("123@gmail.com", "5.00 pm 12th July 2020", "Mobile", "123"),
// ];

class BreachTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: [] };
  }

  componentDidMount() {
    console.log("Mounted");
    let rows = [];
    fetch("http://localhost:5000/breaches")
      .then((response) => response.json())
      .then((result) => {
        result.map((row) => rows.push(row));
        console.log(result);
        this.setState({
          rows: rows,
        });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Employee Email</StyledTableCell>
              <StyledTableCell align="center">Detected At</StyledTableCell>
              <StyledTableCell align="center">Breach Type</StyledTableCell>
              <StyledTableCell align="center">Images</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <StyledTableRow key={row.email}>
                <StyledTableCell component="th" scope="row">
                  {row.email}
                </StyledTableCell>
                <StyledTableCell align="center">{row.time}</StyledTableCell>
                <StyledTableCell align="center">{row.type}</StyledTableCell>
                <StyledTableCell align="center">
                  <SimpleDialogDemo imageName={row.imageName} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withStyles(useStyles)(BreachTable);
