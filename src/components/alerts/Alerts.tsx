import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import useAlerts from "./useAlerts";
import { DataGrid } from "@mui/x-data-grid/DataGrid";

type AlertsProps = {
  state: string;
};

const Alerts = ({ state }: AlertsProps) => {
  const { alerts, loading } = useAlerts(state);

  const columns: GridColDef[] = [
    { field: "effective", headerName: "Effective", width: 200 },
    { field: "expires", headerName: "Expires", width: 200 },
    { field: "headline", headerName: "Headline", width: 800 }
  ];

  return (
    <DataGrid
      rows={alerts}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10
          }
        }
      }}
      pageSizeOptions={[10]}
      disableRowSelectionOnClick
      loading={loading}
    />
  );
};

export default Alerts;
