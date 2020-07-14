import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  Select: {
    width: "100%",
    marginTop: 16,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Filter</Typography>
          <Select
            id="Filter"
            value=""
            onChange={handleChange}
            label=""
            variant="outlined"
            className={classes.Select}
          >
            <MenuItem value={"Employee Email"}>Employee Email</MenuItem>
            <MenuItem value={"BreachType"}>BreachType</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Value</Typography>
          <TextField
            required
            variant="outlined"
            margin="normal"
            id="Query"
            name="address1"
            label="Enter breach type or email"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Date</Typography>
          <TextField
            id="date"
            variant="outlined"
            margin="normal"
            label=""
            type="date"
            fullWidth
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
