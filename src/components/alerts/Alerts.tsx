import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import useAlerts from "./useAlerts";
import { DataGrid, GridCellParams, GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid";
import { Alert, AlertsProps } from "../../types/types.ts";
import { UNSELECTED_STATE_CODE } from "../../consts/consts.ts";

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
      getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? "Mui-even" : "Mui-odd")}
      sx={{
        " & .MuiDataGrid-row.Mui-odd": {
          backgroundColor: "#f8f8f8"
        },
        " & .MuiDataGrid-container--top [role=row]": {
          backgroundColor: "rgba(25, 118, 210, 0.11)"
        }
      }}
      localeText={{ noRowsLabel: state === UNSELECTED_STATE_CODE ? "" : "No alerts found for this state." }}
    />
  );
};

export default Alerts;
