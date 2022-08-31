import React from "react";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

it("should render a value of 1", () => {
  render(<Counter />);
  const basicCounter = screen.getByRole("alert");
  expect(basicCounter).toHaveValue(1);
});
