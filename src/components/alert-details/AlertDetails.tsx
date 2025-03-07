import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { AlertDetailsProps } from "../../types/types.ts";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";

const AlertDetails = ({ onClose, alertDetails, open }: AlertDetailsProps) => (
  <Dialog open={open} onClose={() => onClose()} maxWidth={"md"}>
    <DialogTitle sx={{ backgroundColor: "#1976d2", color: "white" }}>{alertDetails.headline}</DialogTitle>
    <IconButton
      aria-label="closetop"
      onClick={() => onClose()}
      sx={{ position: "absolute", right: 8, top: 4, color: "white" }}
    >
      <CloseIcon />
    </IconButton>
    <DialogContent dividers>
      <Box marginBottom={2}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Details
        </Typography>
        <Typography>{alertDetails.description}</Typography>
      </Box>
      <Box marginBottom={2}>
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
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={() => onClose()}>
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default AlertDetails;
