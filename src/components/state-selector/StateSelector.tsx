import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import states from "./states.json";
import { UNSELECTED_STATE_CODE } from "../../consts/consts.ts";
import Box from "@mui/material/Box";
import { StateSelectorProps } from "../../types/types.ts";

const StateSelector = ({ stateCode, handleChange }: StateSelectorProps) => {
  return (
    <Box>
      <Select size="small" value={stateCode} onChange={(e) => handleChange(e.target.value as string)}>
        <MenuItem key={UNSELECTED_STATE_CODE} disabled value={UNSELECTED_STATE_CODE}>
          <em>Select State</em>
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state.code} value={state.code}>
            {state.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default StateSelector;
