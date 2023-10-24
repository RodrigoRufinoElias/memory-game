import React from "react";
import { render, screen } from "test-utils";
import GamePage from "./GamePage";

test("renders Game page with 14 cards", () => {
  render(<GamePage />);
  const cards = screen.queryAllByRole("presentation");
  expect(cards).toHaveLength(14);
});
