// TDD to-do list for Section. Turn each it.todo into a real test, watch it fail,
// then write the code (see CONTRIBUTING → TDD).
import { describe, it } from "vitest";
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

  it.todo("uses the white background by default");
  it.todo("uses the sand or black background when asked");
  it.todo("sets the id so in-page links work");
});
