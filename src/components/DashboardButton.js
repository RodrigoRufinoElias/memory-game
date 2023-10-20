import React from "react";
import { Button } from "@mui/material";

const DashboardButton = ({ children }) => (
  <Button variant="outlined" color="primary" size="large" fullWidth>
    {children}
  </Button>
);

export default DashboardButton;
