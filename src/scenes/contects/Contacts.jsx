import { Box } from "@mui/material";
import { DataGrid  , GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import { mockDataContacts} from "../../data/MockData";
import { useTheme } from "@emotion/react";


import Header from "../../components/Header";

function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {field:'registarId',headerName:'Registar ID'},
        {
    field: "name",
    headerName: "Name",
    flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.5,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contects for Future Reference" />

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
        "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
            color:`${colors.grey[100]} !important`
        }
        }}
      >
            <DataGrid
    rows={mockDataContacts}
    columns={columns}
    getRowId={(row) => row.id}
    sortingOrder={["asc", "desc"]}
    disableColumnSorting={false}
    slots={{
    toolbar: GridToolbar,
  }}
    showToolbar
    />
      </Box>
    </Box>
  );
}

export default Contacts;