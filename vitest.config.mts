// Vitest setup, from the Next.js docs (node_modules/next/dist/docs/01-app/02-guides/testing/vitest.md).
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // tsconfigPaths: understands the "@/..." imports from tsconfig.json.
  // react: lets tests render React components.
  plugins: [tsconfigPaths(), react()],
  test: {
    // jsdom: a fake browser, so components can render without opening one.
    environment: "jsdom",
    // Don't fail CI before the first test file exists.
    passWithNoTests: true,
  },
});
