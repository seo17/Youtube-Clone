import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default App;
