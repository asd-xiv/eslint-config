/* eslint-env node */

module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    // Modern ECMAScript features
    ecmaVersion: 2020,

    // Use of imports
    sourceType: "module",
  },

  env: {
    browser: false,
    es6: true,
    node: true,
  },

  extends: [
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",

    // Uses eslint-config-prettier to disable ESLint rules from
    // @typescript-eslint/eslint-plugin that would conflict with prettier
    "prettier/@typescript-eslint",
    ...[
      "../rules/best.practices",
      "../rules/comments",
      "../rules/errors",
      "../rules/es6",
      "../rules/import",
      "../rules/import-ts",
      "../rules/jsdoc",
      "../rules/node",
      "../rules/promise",
      "../rules/style",
      "../rules/unicorn",
      "../rules/variables",
      "../rules/prettier",
    ].map(require.resolve),
  ],

  plugins: ["json", "no-inferred-method-name"],

  rules: {
    "@typescript-eslint/no-var-requires": "off",

    // disable, it gives false positives. let eslint/no-unused-vars
    "@typescript-eslint/no-unused-vars": "off",

    "no-unused-vars": [
      "error",
      {
        args: "after-used",
        varsIgnorePattern: "debug",
      },
    ],
  },
}
