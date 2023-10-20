import React from "react";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";

const StyledGrid = styled(Grid)`
  height: 100vh;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
`;

const Dashboard = ({ children }) => (
  <StyledGrid container>{children}</StyledGrid>
);

export default Dashboard;
