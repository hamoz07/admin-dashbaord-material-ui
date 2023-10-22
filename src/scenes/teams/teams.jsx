import React from "react";
import DescR from "../global/DescRibe.jsx";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../../data/data";
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import LockOpen from "@mui/icons-material/LockOpen";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityIcon from "@mui/icons-material/Security";

export default function Teams() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        const { access } = params.row;
        const CardManager =
          access === "Admin"
            ? theme.palette.primary.dark
            : access === "Manager"
            ? theme.palette.secondary.dark
            : "#3da58a";
        return (
          <Box
            sx={{
              padding: "5px 10px",
              display: "flex",
              alignItems: "center",
              backgroundColor: CardManager,
              textAlign: "center",
              color: "#fff",
              borderRadius: "10px",
              "font-size":"16px",
              [theme.breakpoints.down("sm")]: {
                width: "80px", // Change width on small screens
                borderRadius:"0px",
                

              },
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsIcon
                style={{ "margin-right": "10px", width: "20px" }}
              />
            ) : access === "Manager" ? (
              <SecurityIcon style={{ "margin-right": "10px", width: "20px" }} />
            ) : (
              <LockOpen style={{ "margin-right": "10px", width: "20px" }} />
            )}
            <Typography
              style={{
                [theme.breakpoints.down("sm")]: {
                  fontSize:'.8rem',
                },
              }}
             variant="body1">{access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box style={{ padding: "20px" }}>
      <DescR title={"TEAM"} subTitle={"Managing the Team Members"} />
      <Box style={{ width: "98%", "min-height": "600px" }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
}
