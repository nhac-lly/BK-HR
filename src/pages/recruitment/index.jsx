import React, { useState } from "react";
import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import useStyles from "../../components/styles";

function renderTable(rows, classes) {
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Job</TableCell>
              <TableCell align="center">Expected Salary</TableCell>
              <TableCell align="center">Expected Job Level</TableCell>
              <TableCell align="center">Year Of Experience</TableCell>
              <TableCell align="center">Language</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.job}</TableCell>
                <TableCell align="center">{row.expectedSalary}</TableCell>
                <TableCell align="center">{row.expectedJobLevel}</TableCell>
                <TableCell align="center">{row.yearOfExperience}</TableCell>
                <TableCell align="center">{row.language}</TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="primary">
                    Add Candidate{" "}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default function Recruitment() {
  const classes = useStyles();
  const [homeAddress, setHomeAddress] = useState("");
  const [jobLevel, setJobLevel] = useState(0);
  const [data, setData] = useState(null);
  const rows = data;
  const fetchData = async () => {
    const req = await fetch("http://localhost:3000/api/getcandidate");
    const json = await req.json();
    return setData(json);
  };
  const handleChangeHomeAddress = (e) => {
    setHomeAddress(e.target.value);
  };
  const handleChangeJobLevel = (e) => {
    setJobLevel(e.target.value);
  };
  const handleGetCandidate = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <div>
      <Paper className={classes.paper}>
        <form className={classes.recruitTable} noValidate autoComplete="off">
          <Grid container>
            <Grid className={classes.alignSelf} xs>
              <Typography variant="h4" component="h4" gutterBottom>
                Recruitment Search
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <TextField
                id="standard-search"
                label="Category"
                type="search"
                helperText="Choose Category"
              />
              <TextField
                id="standard-search"
                label="Location"
                type="search"
                helperText="Expected Working Location"
              />
            </Grid>
            <Grid item xs>
              <TextField
                id="standard-search"
                label="From"
                type="number"
                helperText="Year of experience"
              />
              <TextField
                id="standard-search"
                label="To"
                type="number"
                helperText="Year of experience"
              />
            </Grid>
          </Grid>
          <br />
          <Grid container>
            <Grid className={classes.alignSelf} xs>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleGetCandidate}
              >
                Click to Search for Candidate
              </Button>
            </Grid>
            <Grid item xs={5}>
              <FormControl className={classes.formControl}>
                <InputLabel shrink id="home-address">
                  Home Address
                </InputLabel>
                <Select
                  labelId="home-address"
                  id="home-address"
                  value={homeAddress}
                  onChange={handleChangeHomeAddress}
                  displayEmpty
                >
                  <MenuItem value="">
                    <em>Please Select</em>
                  </MenuItem>
                  <MenuItem value={1}>HCMC</MenuItem>
                  <MenuItem value={2}>Đà Nẵng</MenuItem>
                  <MenuItem value={3}>Huế</MenuItem>
                </Select>
                <FormHelperText>Choose Home Address</FormHelperText>
              </FormControl>{" "}
              <FormControl className={classes.formControl}>
                <InputLabel id="job-level">Job Level</InputLabel>
                <Select
                  labelId="job-level"
                  id="job-level"
                  value={jobLevel}
                  onChange={handleChangeJobLevel}
                >
                  <MenuItem value={0}>Any</MenuItem>
                  <MenuItem value={1}>Level 1</MenuItem>
                  <MenuItem value={2}>Level 2</MenuItem>
                  <MenuItem value={3}>Level 3</MenuItem>
                </Select>
                <FormHelperText>Choose Job Level</FormHelperText>
              </FormControl>{" "}
            </Grid>
            <Grid item xs>
              <TextField
                id="standard-search"
                label="From"
                type="number"
                helperText="Salary range"
              />
              <TextField
                id="standard-search"
                label="To"
                type="number"
                helperText="Salary range"
              />
            </Grid>
          </Grid>
        </form>
      </Paper>
      <br />
      {!!rows && renderTable(rows, classes)}
    </div>
  );
}
