import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  Button,
  Divider,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export async function getStaticProps() {
  const request = await fetch("http://localhost:3000/api/getuser");
  const json = await request.json();

  return {
    props: {
      data: json,
    },
  };
}

export default function BasicTable({ data }) {
  const classes = useStyles();
  const rows = data;
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" m={1} p={1}>
        <Typography variant="h5" component="h5" gutterBottom>
          User Settings
        </Typography>
        <Button variant="contained" color="primary">
          New User
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Admin Access</TableCell>
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">Password</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
                  <Switch
                    checked={row.admin}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Switch
                    checked={row.active}
                    name="checkedA"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary">
                    Change Password?
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
