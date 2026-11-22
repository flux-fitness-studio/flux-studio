// TDD to-do list for Section. Turn each it.todo into a real test, watch it fail,
// then write the code (see CONTRIBUTING → TDD).
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Section } from "./Section";

describe("Section", () => {
  it("renders its children", () => {
    render(
      <Section>
        <p>Test content</p>
      </Section>,
    );
    screen.getByText("Test content");
  });

  it("uses the white background by default", () => {
    const { container } = render(
      <Section>
        <p>Test content</p>
      </Section>,
    );
    const section = container.querySelector("section");
    expect(section?.className).toContain("bg-brand-white");
  });

  it.todo("uses the sand or black background when asked");
  it.todo("sets the id so in-page links work");
});
