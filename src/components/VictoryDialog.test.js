import React from "react";
import { render, screen } from "@testing-library/react";
import VictoryDialog from "./VictoryDialog";

const onCloseVictoryDialog = jest.fn();
const onStartGame = jest.fn();

describe("Vistory dialog", () => {
  it("should render the Victory dialog when isOpen is true", () => {
    render(
      <VictoryDialog
        isOpen={true}
        onClose={onCloseVictoryDialog}
        onGameRestart={onStartGame}
      />,
    );
    const title = screen.getByText(/Parabéns!/i);
    expect(title).toBeInTheDocument();
  });

  it("should not render the Victory dialog when isOpen is false", () => {
    render(
      <VictoryDialog
        isOpen={false}
        onClose={onCloseVictoryDialog}
        onGameRestart={onStartGame}
      />,
    );
    const title = screen.queryByText(/Parabéns!/i);
    expect(title).not.toBeInTheDocument();
  });
});
