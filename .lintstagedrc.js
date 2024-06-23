const path = require("path");

const buildEslintCommand = (filenames) =>
  `eslint -c eslint.config.mjs --fix`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

module.exports = {
  "*.{ts,tsx}": [
    buildPrettierCommand,
    buildEslintCommand,
    () => "tsc --incremental false --noEmit",
  ],
  "*.{scss,json,yml}": [buildPrettierCommand],
};
