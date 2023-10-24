import React from "react";
import { render, screen, fireEvent } from "test-utils";
import GamePage from "./GamePage";

describe("Game page", () => {
  it("should render game page with 14 cards", () => {
    render(<GamePage />);
    const cards = screen.queryAllByRole("presentation");
    expect(cards).toHaveLength(14);
  });

  it("should click on the first card and reveal it", () => {
    render(<GamePage />);
    const cards = screen.queryAllByRole("presentation");
    fireEvent.click(cards[0]);

    const cardName = screen.getByText(/carta/i);
    expect(cardName).toBeInTheDocument();
  });
});
