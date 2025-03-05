import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import states from "./states.json";
import { UNSELECTED_STATE } from "../../consts.ts";

type StateSelectorProps = {
  selectedState: string;
  handleChange: (newState: string) => void;
};

const StateSelector = ({ selectedState, handleChange }: StateSelectorProps) => {
  return (
    <Select size="small" value={selectedState} onChange={(e) => handleChange(e.target.value as string)}>
      <MenuItem disabled value={UNSELECTED_STATE}>
        <em>Select State</em>
      </MenuItem>
      {states.map((state) => (
        <MenuItem value={state.code}>{state.name}</MenuItem>
      ))}
    </Select>
  );
};

export default StateSelector;
