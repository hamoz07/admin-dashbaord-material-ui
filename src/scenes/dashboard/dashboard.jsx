import React from "react";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import Row1  from "../../components/Row1.jsx";
import Row2  from "../../components/Row2.jsx";
import Row3  from "../../components/Row3.jsx";
import DescR from "../global/DescRibe.jsx";

export default function Dashboard() {
  return (
    <Box style={{padding:"20px"}}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <DescR
          title={"DASHBOARD"}
          subTitle={"List of Contacts for Future Reference"}
        />

        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}
