import React from "react";
import { Typography, CardContent, Card as MUCard } from "@mui/material";
import styled from "@emotion/styled";

const cardWidth = "160px";
const cardHeight = "200px";

const CardContainer = styled.div`
  width: ${cardWidth};
  height: ${cardHeight};
  margin: 12px;
  cursor: pointer;
`;

const CardFlipper = styled.div`
  transition: 400ms;
  transform-style: preserve-3d;
  position: relative;

  &.flipper-rotate {
    transform: rotateY(180deg);
  }
`;

const StyledMUCard = styled(MUCard)`
  width: ${cardWidth};
  height: ${cardHeight};
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;

  &.card-front {
    background-color: silver;
    transform: rotateY(0deg);
    z-index: 2;
  }

  &.card-back {
    background-color: tomato;
    transform: rotateY(180deg);
  }
`;

const Card = ({ name, isActive, onClick }) => (
  <CardContainer role="presentation" onClick={onClick}>
    <CardFlipper className={`${isActive ? "flipper-rotate" : ""}`}>
      {!isActive && <StyledMUCard className="card-front" />}
      {isActive && (
        <StyledMUCard className="card-back">
          <CardContent>
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </StyledMUCard>
      )}
    </CardFlipper>
  </CardContainer>
);

export default Card;
