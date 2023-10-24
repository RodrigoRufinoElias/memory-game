import React from "react";
import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "store";

const TestProvider = ({ children }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export * from "@testing-library/react";

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
