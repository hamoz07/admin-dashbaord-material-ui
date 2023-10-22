import { EmailOutlined } from "@mui/icons-material";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { Stack, useTheme } from "@mui/material";
import React from "react";
import {Data1,Data2,Data3,Data4} from './dashboardData.js'
import Card from './Card.jsx'
export default function Row1() {
    const theme = useTheme()
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={{ sx: "center", sm: "space-between" }}
      gap={1}
    >
      <Card
        icon={
          <EmailOutlined
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
            />
        }
            title={"12,361"}
            subTitle={"Emails Sent"}
            increase={"+14%"}
            data={Data1} scheme={"nivo"}  
      />
            <Card
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"}
        subTitle={"Sales obtained"}
        increase={"+21%"}
        data={Data2}
        scheme={"category10"} 
      />

      <Card
        icon={
          <PersonAddIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"32,441"}
        subTitle={"New Clients"}
        increase={"+5%"}
        data={Data3}
        scheme={"accent"} 
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,134"}
        subTitle={"Traffic Received"}
        increase={"+43%"}
        data={Data4}
        scheme={"dark2"} 

      />
    </Stack>
  );
}
