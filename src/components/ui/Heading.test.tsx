// TDD to-do list for Heading. Turn each it.todo into a real test, watch it fail,
// then write the code (see CONTRIBUTING → TDD).
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
  it("renders an h2 by default", () => {
    render(<Heading>Classes</Heading>);
    screen.getByRole("heading", { level: 2 });
  });
  it.todo("renders h1 or h3 when given level 1 or 3");
  it.todo("renders its text");
});
