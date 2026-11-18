// Runs before every test file (wired up in vitest.config.mts).
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// After each test, remove whatever it drew, so the next test starts with a blank page.
afterEach(() => {
  cleanup();
});
