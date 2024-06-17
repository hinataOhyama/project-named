/** @type {import("eslint").Linter.FlatConfig[]} */
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import typeScriptESLint from "@typescript-eslint/eslint-plugin";
import typeScriptESLintParser from "@typescript-eslint/parser";
import eslintPluginTailwindCSS from "eslint-plugin-tailwindcss";
import eslintConfigNext, { parserOptions } from "eslint-config-next";

export default [
  eslint.configs.recommended,
  eslintConfigPrettier,
  eslintConfigNext.configs.recommended,
  {
    plugins: {
      typeScriptESLint,
      eslintPluginTailwindCSS,
    },
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typeScriptESLintParser,
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    rules: {
      "no-console": "off",
      "no-debugger": "error",
      "node/no-deprecated-api": "off",
      "node/no-unpublished-import": "off",
      "node/no-unpublished-require": "off",
      "node/no-unsupported-features/es-syntax": "off",
      "no-process-exit": "off",
      "node/no-missing-import": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "no-implicit-coercion": "error",
      "@typescript-eslint/restrict-plus-operands": [
        "error",
        {
          checkCompoundAssignments: true,
          allowBoolean: false,
          allowNullish: false,
          allowNumberAndString: false,
          allowRegExp: false,
          allowAny: false,
        },
      ],
      "prefer-template": "error",
    },
  },
];
