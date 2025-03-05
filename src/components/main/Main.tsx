import Typography from "@mui/material/Typography";
import StateSelector from "../state-selector/StateSelector";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import Alerts from "../alerts/Alerts.tsx";
import { UNSELECTED_STATE_CODE } from "../../consts.ts";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import { SimpleDialog } from "../simple-dialog/SimpleDialog.tsx";

const Main = () => {
  const [stateCode, setStateCode] = useState(UNSELECTED_STATE_CODE);
  const [open, setOpen] = useState(false);

  const showAlertDetails = () => {
    setOpen(true);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              National Weather Alerts
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Stack spacing={2} marginTop={2}>
        <StateSelector handleChange={setStateCode} stateCode={stateCode} />
        <Grid>
          <Alerts state={stateCode} showAlertDetails={showAlertDetails} />
        </Grid>
      </Stack>
      <SimpleDialog selectedValue={""} open={open} onClose={() => ({})} />
    </>
  );
};

export default Main;
