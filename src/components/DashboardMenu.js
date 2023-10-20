import React from "react";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledPaper = styled(Paper)`
  padding: 30px;
`;

const StyledTypography = styled(Typography)`
  padding-bottom: 50px;
`;

const DashboardMenu = ({ children, title }) => (
  <StyledPaper>
    <StyledTypography variant="h4" align="center">
      {title}
    </StyledTypography>
    {children}
  </StyledPaper>
);

export default DashboardMenu;
