import useAlerts from "./useAlerts";
import { DataGrid, GridCellParams, GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid";
import { Alert, AlertsProps } from "../../types/types.ts";
import { ALERT_COLUMNS, UNSELECTED_STATE_CODE } from "../../consts/consts.ts";
import DateRange from "../data-range/DataRange.tsx";
import Typography from "@mui/material/Typography";

const Alerts = ({ state, showAlertDetails }: AlertsProps) => {
  const { alerts, alertsToShow, loading, handleDateRangeChange } = useAlerts(state);

  return (
    <>
      <DataGrid
        rows={alertsToShow}
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
              {alerts && alerts.length ? (
                <DateRange
                  initialStartDate={new Date(alerts[alerts.length - 1].effective).toISOString()}
                  initialEndDate={new Date(alerts[0].effective).toISOString()}
                  selectionChange={handleDateRangeChange}
                />
              ) : null}
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
          },
          "& .MuiDataGrid-cell:hover": {
            cursor: "pointer"
          }
        }}
        localeText={{ noRowsLabel: state === UNSELECTED_STATE_CODE ? "" : "No alerts found for this state." }}
      />
      {alertsToShow && alertsToShow.length ? (
        <Typography sx={{ opacity: "0.5" }}>Click alert to get more details.</Typography>
      ) : null}
    </>
  );
};

export default Alerts;
