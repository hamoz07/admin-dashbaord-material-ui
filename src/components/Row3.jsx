import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Piechart from "../scenes/piechart/piechart";
import MyResponsiveBar from "../scenes/ChartBar/ChartBar";
import Geo from "../scenes/geo/Geo";

export default function Row3() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={{ sx: "center", sm: "space-between" }}
      gap={3}
      marginTop={4}
    >
      <Paper sx={{ flexGrow: 1, maxWidth: "390px", p: 1 }}>
        <Box>
          <Typography
            color={theme.palette.secondary.main}
            mb={1}
            mt={2}
            ml={4}
            variant="h6"
            fontWeight={"bold"}
          >
            campaign
          </Typography>
        </Box>

        <Piechart isPie={true} />

        <Typography sx={{ mt: "5px" }} variant="h6" align="center">
          $48,312 revenue generated
        </Typography>

        <Typography px={0.7} pb={3} variant="body2" align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper sx={{ flexGrow: 1, maxWidth: "423px", p: 1 }}>
        <Box>
          <Typography
            color={theme.palette.secondary.main}
            mb={1}
            mt={2}
            ml={4}
            variant="h6"
            fontWeight={"bold"}
          >
            sales quantity
          </Typography>
        </Box>

        <MyResponsiveBar isDash={true} />
      </Paper>
      <Paper sx={{ flexGrow: 1, maxWidth: "373px", p: 1.5 }}>
        <Geo isDashbord={true} />
      </Paper>
    </Stack>
  );
}
