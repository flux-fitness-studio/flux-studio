// TDD to-do list for Button. Turn each it.todo into a real test, watch it fail,
// then write the code (see CONTRIBUTING → TDD).
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders its label text", () => {
    render(<Button href="/schedule">Book a class</Button>);
    screen.getByRole("link", { name: "Book a class" });
  });

  it("links to the href it is given", () => {
    render(<Button href="https://fitco.example.com">Book a class</Button>);
    const link = screen.getByRole("link", { name: "Book a class" });
    expect(link.getAttribute("href")).toBe("https://fitco.example.com");
  });

  it.todo("uses the primary style by default");
  it.todo("uses the secondary style when asked");
});