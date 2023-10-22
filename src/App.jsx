import { useMemo , useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './scenes/global/header'
import SideBar from './scenes/global/sidebar'
import { getDesignTokens } from './theme';
import { Outlet } from 'react-router-dom';


export default function MiniDrawer() {
  
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(localStorage.getItem("currentMode") ? localStorage.getItem("currentMode") : "light");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: "68.01px 14px 14px" }} >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}