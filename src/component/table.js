import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">UserName</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Phone Number</StyledTableCell>
            <StyledTableCell align="left">Website</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Geo Location</StyledTableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row,Index) => (
          
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.username}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.phone}</StyledTableCell>
              <StyledTableCell align="left">{row.website}</StyledTableCell>
              <StyledTableCell align="left">{row.address.suite}<br></br>
              {row.address.street}<br></br>
              {row.address.city}<br></br>
              {row.address.zipcode}</StyledTableCell>
              <StyledTableCell align="left">{row.address.geo.lat}<br></br>
              {row.address.geo.lng}</StyledTableCell>
                 
             </StyledTableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
