import React from "react";
// Mui
import { AppBar, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{backgroundColor: '#F87A7A', p: 1}}>
        <Typography variant="h7" component="div" pl={6}>
          Wilders Book
        </Typography>
      </AppBar>
    </Box>
  );
}

export default Header;
