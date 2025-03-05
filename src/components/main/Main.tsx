import Typography from "@mui/material/Typography";
import StateSelector from "../state-selector/StateSelector";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import Alerts from "../alerts/Alerts.tsx";
import { UNSELECTED_STATE } from "../../consts.ts";

const Main = () => {
  const [state, setState] = useState(UNSELECTED_STATE);

  return (
    <>
      <Typography variant="h4">National Weather Alerts</Typography>
      <StateSelector handleChange={setState} selectedState={state} />
      <Grid>
        <Alerts />
      </Grid>
    </>
  );
};

export default Main;
