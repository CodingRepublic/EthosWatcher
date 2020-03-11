import React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

type DashboardTableProps = {};

const StyledDiv = styled.div`
  background-color: #27293d;
  border: 1px solid #27293d;
  border-radius: 5px;
  box-shadow: 2px 2px 1px 1px rgba(15, 16, 24, 0.2);
  padding: 15px;
`;

const StyledTableCell = styled(TableCell)`
  color: #9a9a9a;
  font-weight: 1000;
`;

const StyledTableCell1 = styled(TableCell)`
  color: white;
`;

function createData(a, b, c, d, e, f, g, h, i) {
  return { a, b, c, d, e, f, g, h, i };
}

const rows = [
  createData("rig1", 150, 6, 34, 600, 1.15, "Claymore 1", 10, 1),
  createData("rig2", 150, 6, 34, 600, 1.15, "Claymore 2", 10, 1)
  // createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export const DashboardTable = ({}: DashboardTableProps) => (
  <StyledDiv>
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="right">Mh/s</StyledTableCell>
            <StyledTableCell align="right">Nb GPUs</StyledTableCell>
            <StyledTableCell align="right">Temp (c)</StyledTableCell>
            <StyledTableCell align="right">Watts</StyledTableCell>
            <StyledTableCell align="right">EthOS V</StyledTableCell>
            <StyledTableCell align="right">Miner</StyledTableCell>
            <StyledTableCell align="right">Up Time (h)</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.a}>
              <StyledTableCell1 component="th" scope="row">
                {row.a}
              </StyledTableCell1>
              <StyledTableCell1 align="right">{row.b}</StyledTableCell1>
              <StyledTableCell1 align="right">{row.c}</StyledTableCell1>
              <StyledTableCell1 align="right">{row.d}</StyledTableCell1>
              <StyledTableCell1 align="right">{row.e}</StyledTableCell1>
              <StyledTableCell1 align="right">{row.f}</StyledTableCell1>
              <StyledTableCell1 align="right">{row.g}</StyledTableCell1>
              <StyledTableCell1 align="right">{row.h}</StyledTableCell1>
              <StyledTableCell1 align="right">{row.i}</StyledTableCell1>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div
      style={{ paddingTop: "15px", color: "#9a9a9a", fontSize: "0.6em", letterSpacing: "0.1px", textAlign: "right" }}
    >
      MORE INFO
    </div>
  </StyledDiv>
);
