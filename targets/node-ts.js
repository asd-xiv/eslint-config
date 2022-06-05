/* eslint-env node */

module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },

  env: {
    node: true,
    es6: true,
  },

  extends: [
    ...[
      "../rules/json",
      "../rules/best.practices",
      "../rules/comments",
      "../rules/errors",
      "../rules/es6",
      "../rules/import",
      "../rules/import-ts",
      "../rules/jsdoc",
      "../rules/jsdoc-ts",
      "../rules/node",
      "../rules/promise",
      "../rules/style",
      "../rules/unicorn",
      "../rules/variables",
      "../rules/prettier",
    ].map(require.resolve),

    "plugin:@typescript-eslint/recommended",
  ],

  plugins: ["no-inferred-method-name"],

  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-comment": "warn",
    "no-unused-vars": "off",
  },
}
