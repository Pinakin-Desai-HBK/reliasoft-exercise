import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { AlertDetailsProps } from "../../types.ts";

const AlertDetails = (props: AlertDetailsProps) => {
  const { onClose, alertDetails, open } = props;

  return (
    <Dialog open={open} onClose={() => onClose()}>
      <DialogTitle>{alertDetails?.headline}</DialogTitle>
    </Dialog>
  );
};

export default AlertDetails;
