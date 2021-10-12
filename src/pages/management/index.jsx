import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Link,
} from "@material-ui/core";
import useStyles from "../../components/styles";

export async function getStaticProps() {
  const request = await fetch("http://localhost:3000/api/getdata");
  const json = await request.json();

  return {
    props: {
      data: json,
    },
  };
}

export default function ReactVirtualizedTable({ data }) {
  const rows = data;
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <Box m={1} p={1}>
        <Typography variant="h5" component="h5" gutterBottom>
          Candidate Management
        </Typography>
      </Box>
      <Paper>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Position</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Interview Date</TableCell>
                <TableCell align="center">Note</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">
                    <Link href="/test.pdf" target="_blank">
                      {row.name}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.position}</TableCell>
                  <TableCell align="center">
                    {" "}
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      defaultValue={row.status}
                    >
                      <MenuItem value="Pass">Pass</MenuItem>
                      <MenuItem value="Failed">Fail</MenuItem>
                      <MenuItem value="In Touch">In Touch</MenuItem>
                      <MenuItem value="In Progress">In Progress</MenuItem>
                      <MenuItem value="Job Closed">Job Closed</MenuItem>
                      <MenuItem value="Denied">Denied</MenuItem>
                      <MenuItem value="Accepted">Accepted</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell align="center">{row.interviewDate}</TableCell>
                  <TableCell align="center">{row.note}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary">
                      Remove Candidate{" "}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
