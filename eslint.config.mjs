import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // No text typed straight into components: it must come from the dictionary
  // (src/dictionaries) as props, so every label exists in English and Spanish.
  // noStrings also catches text wrapped in braces, like {"Book a class"}.
  // ignoreProps leaves props like className="..." alone.
  // allowedStrings: text that's the same in both languages.
  {
    files: ["src/components/**/*.tsx"],
    ignores: ["src/components/**/*.test.tsx"],
    rules: {
      "react/jsx-no-literals": [
        "error",
        {
          noStrings: true,
          ignoreProps: true,
          allowedStrings: ["EN / ES", "EN", "ES", "/", "©", "↗", "·"],
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
