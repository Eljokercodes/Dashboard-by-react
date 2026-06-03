import { Box, Typography,useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import { mockDataInvoices} from "../../data/MockData";



import Header from "../../components/Header";

function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID"},
    
        {
    field: "name",
    headerName: "Name",
    flex: 1,
    },
    
    {
        field: "email",
        headerName: "Email",
        flex: 1,
    },
    
    {
        field: "cost",
        headerName: "Cost",
        flex: 1,
        renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
            ${params.row.cost}
        </Typography>
        )
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Inovices Balances" />

      <Box
        height="75vh"

                sx={{
        "& .MuiDataGrid-root": { border: "none" },

        "& .MuiDataGrid-cell": {
            borderBottom: "none",
        },
        
        "& .MuiDataGrid-columnHeaders": {
            backgroundColor: `${colors.blueAccent[700]} !important`,
            borderBottom: "none",
        },

        "& .MuiDataGrid-columnHeader": {
            backgroundColor: `${colors.blueAccent[700]} !important`,
        },

        "& .MuiDataGrid-main": {
            backgroundColor: `${colors.primary[400]} !important`,
        },

        "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: `${colors.blueAccent[700]} !important`,
        },
        "& .MuiCheckbox-root":{
            color:`${colors.greenAccent[200]} !important`
        }
        }}
      >
            <DataGrid
    checkboxSelection
    rows={mockDataInvoices}
    columns={columns}
    getRowId={(row) => row.id}
    sortingOrder={["asc", "desc"]}
    disableColumnSorting={false}
    />
      </Box>
    </Box>
  );
}

export default Invoices;