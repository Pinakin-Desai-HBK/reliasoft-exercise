import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";

export const UNSELECTED_STATE_CODE = "unselected";

export const STORED_STATE_CODE = "storedStateCode";

export const ALERT_COLUMNS: GridColDef[] = [
  { field: "effectiveLocale", headerName: "Effective", width: 200, filterable: false },
  { field: "expiresLocale", headerName: "Expires", width: 200, filterable: false },
  { field: "headline", headerName: "Headline", width: 800 }
];
