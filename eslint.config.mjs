import js from "@eslint/js";
import ts from "typescript-eslint";
export default [
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  {
    files: ["**/*.{ts,tsx,js}"],
    languageOptions: { parserOptions: { project: true } },
    rules: {
      "no-unused-vars": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }]
    }
  }
];
