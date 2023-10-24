import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Main app", () => {
  it("should render the start game button", () => {
    render(<App />);
    const linkElement = screen.getByText(/iniciar jogo/i);
    expect(linkElement).toBeInTheDocument();
  });
});
