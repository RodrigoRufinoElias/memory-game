import React from "react";

import { Dashboard, DashboardMenu, DashboardButton } from "components";

const HomePage = () => (
  <Dashboard>
    <DashboardMenu title={"Jogo da Memória"}>
      <DashboardButton to="/game">Iniciar jogo</DashboardButton>
    </DashboardMenu>
  </Dashboard>
);

export default HomePage;
