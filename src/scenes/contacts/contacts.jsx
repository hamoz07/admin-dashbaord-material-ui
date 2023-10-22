import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import React from "react";
import DescR from "../global/DescRibe.jsx";
import { Box } from "@mui/system";
import { columns, rows } from './contactData.jsx';


export default function Contacts(){
  return (
      <Box style={{ padding: "20px" }}>
            <DescR title={"Contacts"} subTitle={"List of Contacts for Future Reference"} />
            <Box style={{ width: "98%", "min-height": "600px" }}>
            <DataGrid 
                slots={{
                    toolbar: GridToolbar,
                }} 
                rows={rows}
                columns={columns}
                 />
            </Box>
      </Box>
  );
}