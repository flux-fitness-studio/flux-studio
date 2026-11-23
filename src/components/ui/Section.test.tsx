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

  it("uses the sand or black background when asked", () => {
    const { container: sandContainer } = render(
      <Section background="sand">
        <p>Sand content</p>
      </Section>,
    );
    const sandSection = sandContainer.querySelector("section");
    expect(sandSection?.className).toContain("bg-brand-sand");

    const { container: blackContainer } = render(
      <Section background="black">
        <p>Black content</p>
      </Section>,
    );
    const blackSection = blackContainer.querySelector("section");
    expect(blackSection?.className).toContain("bg-brand-black");
    expect(blackSection?.className).toContain("text-brand-white");
  });

  it("sets the id so in-page links work", () => {
    const { container } = render(
      <Section id="classes">
        <p>Classes</p>
      </Section>,
    );
    const section = container.querySelector("section");
    expect(section?.getAttribute("id")).toBe("classes");
  });
});
