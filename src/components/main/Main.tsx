import Typography from "@mui/material/Typography";
import StateSelector from "../state-selector/StateSelector";
import Alerts from "../alerts/Alerts.tsx";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import AlertDetails from "../alert-details/AlertDetails.tsx";
import useMain from "./useMain.ts";

const Main = () => {
  const { stateCode, handleStateChange, alertDetails, showAlertDetails, showDetails, setShowDetails } = useMain();

  return (
    <>
      <Box sx={{ flexGrow: 1 }} role="header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">National Weather Alerts</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Stack spacing={2} marginTop={2} role="main">
        <StateSelector handleChange={handleStateChange} stateCode={stateCode} />
        <Alerts state={stateCode} showAlertDetails={showAlertDetails} />
      </Stack>
      <AlertDetails alertDetails={alertDetails} open={showDetails} onClose={() => setShowDetails(false)} />
    </>
  );
};

export default Main;
