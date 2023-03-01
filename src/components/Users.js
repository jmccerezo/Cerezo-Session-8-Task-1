import React, { Component } from "react";
import { connect } from "react-redux";
import ReactExport from "react-export-excel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class Users extends Component {
  render() {
    console.log("USERS", this.props.users.userData);
    return (
      <div>
        <div style={{ paddingTop: "65px", margin: "25px" }}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650, backgroundColor: "whitesmoke" }}
              aria-label="simple table"
            >
              <TableHead style={{ backgroundColor: "lightgrey" }}>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Username</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Phone</TableCell>
                  <TableCell align="left">Website</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.users.userData.map((emp) => (
                  <TableRow
                    key={emp.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {emp.id}
                    </TableCell>
                    <TableCell align="left">{emp.name}</TableCell>
                    <TableCell align="left">{emp.username}</TableCell>
                    <TableCell align="left">{emp.email}</TableCell>
                    <TableCell align="left">{emp.phone}</TableCell>
                    <TableCell align="left">{emp.website}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="download-btn-container">
          <ExcelFile
            element={
              <Button
                variant="contained"
                style={{ backgroundColor: "forestgreen" }}
              >
                Download
              </Button>
            }
          >
            <ExcelSheet data={this.props.users.userData} name="User Data">
              <ExcelColumn label="Name" value="name" />
              <ExcelColumn label="Username" value="username" />
              <ExcelColumn label="Email" value="email" />
              <ExcelColumn label="Phone" value="website" />
              <ExcelColumn label="Website" value="website" />
            </ExcelSheet>
          </ExcelFile>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

export default connect(mapStateToProps, null)(Users);
