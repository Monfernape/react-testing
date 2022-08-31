import React from "react";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

it("should render a value of 1", () => {
  render(<Counter />);
  const basicCounter = screen.getByRole("alert");
  expect(basicCounter).toHaveValue(1);
});

it("should increase count when plus button is clicked", () => {
  const basicCounter = screen.getByRole("alert");
  const increaseCount = screen.getByRole("button", {
    name: "Increment by one",
  });

  expect(basicCounter).toHaveValue(1);
  userEvent.click(increaseCount);
  expect(basicCounter).toHaveValue(2);
});
