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
  it("renders h1 or h3 when given level 1 or 3", () => {
    render(<Heading level={1}>Flux Fitness</Heading>);
    screen.getByRole("heading", { level: 1 });

    render(<Heading level={3}>Yoga</Heading>);
    screen.getByRole("heading", { level: 3 });
  });
  it("renders its text", () => {
    render(<Heading>Classes</Heading>);
    screen.getByRole("heading", { name: "Classes" });
  });
});
