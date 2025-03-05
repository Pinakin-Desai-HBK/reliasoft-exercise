import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import useAlerts from "./useAlerts";
import { DataGrid } from "@mui/x-data-grid/DataGrid";

type AlertsProps = {
  state: string;
};

const Alerts = ({ state }: AlertsProps) => {
  const { alerts } = useAlerts(state);

  const columns: GridColDef[] = [
    { field: "effective", headerName: "Effective", width: 150 },
    { field: "expires", headerName: "Expires", width: 150 },
    { field: "headline", headerName: "Last name", width: 150 }
  ];

  return (
    <DataGrid
      rows={[]}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5
          }
        }
      }}
      pageSizeOptions={[5]}
      disableRowSelectionOnClick
    />
  );
};

export default Alerts;
