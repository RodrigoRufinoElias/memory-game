import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";

import AppRoutes from "../AppRoutes";
import store from "store";

const App = () => (
  <ReduxProvider store={store}>
    <>
      <CssBaseline />
      <Router>
        <AppRoutes />
      </Router>
    </>
  </ReduxProvider>
);

export default App;
