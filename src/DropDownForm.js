import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function weekNumber(date = new Date()) {
  var firstJanuary = new Date(date.getFullYear(), 0, 1);
  var dayNr = Math.ceil((date - firstJanuary) / (24 * 60 * 60 * 1000));
  var weekNr = Math.ceil((dayNr + firstJanuary.getDay()) / 7);
  return weekNr;
}

function dayNumber(date = new Date()) {
    return date.getDay();
}
function monthNumber(date = new Date()) {
    return date.getMonth();
}

export default function DropDownForm() {
  const [dateType, setDateType] = React.useState("");

  const handleChange = (event) => {
    setDateType(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Date Type
        </InputLabel>
        <Select
          id="demo-simple-select-autowidth"
          value={dateType}
          onChange={handleChange}
          label="dateType"
        >
          <MenuItem value="Day">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Day</MenuItem>
          <MenuItem value={20}>Week</MenuItem>
          <MenuItem value={30}>Month</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
