import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import AppRoutes from "../AppRoutes";

const App = () => (
  <>
    <CssBaseline />
    <Router>
      <AppRoutes />
    </Router>
  </>
);

export default App;
