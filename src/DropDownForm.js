import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDownForm() {
  const [dateType, setDateType] = React.useState("");

  const handleChange = (event) => {
    setDateType(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Date Type
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={dateType}
          onChange={handleChange}
          label="DateType"
        >
          <MenuItem value="Day">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Day</MenuItem>
          <MenuItem value={21}>Week</MenuItem>
          <MenuItem value={22}>Month</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
