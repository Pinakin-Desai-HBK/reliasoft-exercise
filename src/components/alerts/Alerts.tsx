import { GridColDef } from "@mui/x-data-grid/models/colDef/gridColDef";
import useAlerts from "./useAlerts";
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid";

type AlertsProps = {
  state: string;
  showAlertDetails: () => void;
};

const Abc = () => {
  return <div>abc</div>;
};

const Alerts = ({ state, showAlertDetails }: AlertsProps) => {
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
      slots={{
        toolbar: () => (
          <GridToolbarContainer>
            <GridToolbarFilterButton />
            <Abc />
          </GridToolbarContainer>
        )
      }}
      onCellClick={() => showAlertDetails()}
    />
  );
};

export default Alerts;
