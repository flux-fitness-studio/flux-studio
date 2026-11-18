// TDD to-do list for Button. Turn each it.todo into a real test, watch it fail,
// then write the code (see CONTRIBUTING → TDD).
import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders its label text", () => {
    render(<Button href="/schedule">View Schedule</Button>);
    screen.getByRole("link", { name: "View Schedule" });
  });

  it.todo("links to the href it is given");
  it.todo("uses the primary style by default");
  it.todo("uses the secondary style when asked");
});