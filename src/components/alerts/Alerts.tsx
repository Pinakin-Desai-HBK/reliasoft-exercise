import useAlerts from "./useAlerts";
import { DataGrid, GridCellParams, GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid";
import { Alert, AlertsProps } from "../../types/types.ts";
import { ALERT_COLUMNS, UNSELECTED_STATE_CODE } from "../../consts/consts.ts";
import DateRange from "../data-range/DataRange.tsx";

const Alerts = ({ state, showAlertDetails }: AlertsProps) => {
  const { alerts, loading } = useAlerts(state);

  return (
    <DataGrid
      rows={alerts}
      columns={ALERT_COLUMNS}
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
            <DateRange />
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
