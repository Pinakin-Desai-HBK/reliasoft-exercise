import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import useAlerts from "./useAlerts";
import { DataGrid, GridCellParams, GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid";
import { Alert, AlertsProps } from "../../types/types.ts";

const Alerts = ({ state, showAlertDetails }: AlertsProps) => {
  const { alerts, loading } = useAlerts(state);

  const columns: GridColDef[] = [
    { field: "effective", headerName: "Effective", width: 200, filterable: false },
    { field: "expires", headerName: "Expires", width: 200, filterable: false },
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
      slots={{
        toolbar: () => (
          <GridToolbarContainer>
            <GridToolbarFilterButton />
          </GridToolbarContainer>
        )
      }}
      onCellClick={(params: GridCellParams) => showAlertDetails(params.row as Alert)}
    />
  );
};

export default Alerts;
