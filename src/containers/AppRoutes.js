import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
  </Routes>
);

export default AppRoutes;
