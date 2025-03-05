import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import states from "./states.json";

const StateSelector = () => {
  return (
    <Select size="small" value={"a"}>
      <MenuItem disabled value="a">
        <em>Select State</em>
      </MenuItem>
      {states.map((state) => (
        <MenuItem value={state.code}>{state.name}</MenuItem>
      ))}
    </Select>
  );
};

export default StateSelector;
