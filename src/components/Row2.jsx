import { DownloadOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import LineChart from "../scenes/lineChart/lineChart";
import { Transactions } from "./dashboardData";

export default function Row2() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={{ sx: "center", sm: "space-between" }}
      gap={5}
      marginTop={4}
    >
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px", p: 1.5 }}>
        <Stack
          direction={"row"}
          justifyContent={{ sx: "center", sm: "space-between" }}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
              fontWeight={"bold"}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <LineChart isMain={true} />
      </Paper>
      <Box
        sx={{
          overflow: "auto",
          borderRadius: "4px",
          // minWidth: "280px",
          maxHeight: "300px",
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        {Transactions.map((item) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${`${item.cost}`}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}
