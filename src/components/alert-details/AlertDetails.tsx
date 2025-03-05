import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { AlertDetailsProps } from "../../types/types.ts";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const AlertDetails = ({ onClose, alertDetails, open }: AlertDetailsProps) => {
  return (
    <Dialog open={open} onClose={() => onClose()} maxWidth={"md"}>
      <DialogTitle>{alertDetails?.headline}</DialogTitle>
      <Stack paddingLeft={3} paddingRight={3} paddingBottom={3} spacing={2}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Details
          </Typography>
          <Typography>{alertDetails?.description}</Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Duration
          </Typography>
          <Typography>Effective: {alertDetails?.effective}</Typography>
          <Typography>Expires: {alertDetails?.expires}</Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Areas affected:
          </Typography>
          <Typography>{alertDetails?.areaDesc}</Typography>
        </Box>
      </Stack>
    </Dialog>
  );
};

export default AlertDetails;
