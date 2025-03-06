import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { AlertDetailsProps } from "../../types/types.ts";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const AlertDetails = ({ onClose, alertDetails, open }: AlertDetailsProps) => (
  <Dialog open={open} onClose={() => onClose()} maxWidth={"md"}>
    <DialogTitle sx={{ backgroundColor: "#e5e5e5", marginBottom: "20px" }}>{alertDetails.headline}</DialogTitle>
    <Stack paddingLeft={3} paddingRight={3} paddingBottom={3} spacing={2}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Details
        </Typography>
        <Typography>{alertDetails.description}</Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Duration
        </Typography>
        <Typography>Effective: {new Date(alertDetails.effective).toLocaleString()}</Typography>
        <Typography>Expires: {new Date(alertDetails.expires).toLocaleString()}</Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Affected areas
        </Typography>
        <Typography>{alertDetails.areaDesc}</Typography>
      </Box>
    </Stack>
  </Dialog>
);

export default AlertDetails;
