import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import GamePage from "./Game/GamePage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/game" element={<GamePage />}></Route>
  </Routes>
);

export default AppRoutes;
