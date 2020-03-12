import React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

export const DashboardTable = ({ json }): any => (
  <StyledDiv>
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="right">Hashing Power</StyledTableCell>
            <StyledTableCell align="right">Nb GPUs</StyledTableCell>
            <StyledTableCell align="right">Temps (c)</StyledTableCell>
            <StyledTableCell align="right">Watts</StyledTableCell>
            <StyledTableCell align="right">EthOS V</StyledTableCell>
            <StyledTableCell align="right">Miner</StyledTableCell>
            <StyledTableCell align="right">Up Time (h)</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(json["rigs"]).map(rigName => (
            <React.Fragment key={rigName}>
              <TableRow key={rigName}>
                <StyledTableCell1 component="th" scope="row">
                  {rigName}
                </StyledTableCell1>
                <StyledTableCell1 align="right">{json["rigs"][rigName]["hash"]}</StyledTableCell1>
                <StyledTableCell1 align="right">{json["rigs"][rigName]["gpus"]}</StyledTableCell1>
                <StyledTableCell1 align="right">{json["rigs"][rigName]["temp"]}</StyledTableCell1>
                <StyledTableCell1 align="right">{json["rigs"][rigName]["rig_watts"]}</StyledTableCell1>
                <StyledTableCell1 align="right">{json["rigs"][rigName]["version"]}</StyledTableCell1>
                <StyledTableCell1 align="right">{json["rigs"][rigName]["miner"]}</StyledTableCell1>
                <StyledTableCell1 align="right">{json["rigs"][rigName]["uptime"]}</StyledTableCell1>
                <StyledTableCell1 align="right">good</StyledTableCell1>
              </TableRow>
            </React.Fragment>
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
