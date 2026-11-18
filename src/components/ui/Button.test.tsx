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

  it("uses the primary style by default", () => {
    render(<Button href="/schedule">Book a class</Button>);
    const link = screen.getByRole("link", { name: "Book a class" });
    expect(link.className).toContain("bg-brand-black");
    expect(link.className).toContain("text-brand-white");
  });

  it("uses the secondary style when asked", () => {
    render(
      <Button href="/schedule" variant="secondary">
        Book a class
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Book a class" });
    expect(link.className).toContain("border-2");
    expect(link.className).toContain("border-brand-black");
    expect(link.className).toContain("text-brand-black");
    expect(link.className).toContain("hover:bg-brand-sand");
  });
});
