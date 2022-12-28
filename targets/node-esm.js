/* eslint-env node */

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },

  env: {
    node: true,
  },

  extends: [
    "../rules/json",
    "../rules/best.practices",
    "../rules/comments",
    "../rules/errors",
    "../rules/es6",
    "../rules/jsdoc",
    "../rules/node",
    "../rules/promise",
    "../rules/style",
    "../rules/unicorn",
    "../rules/variables",
    "../rules/prettier",
  ].map(require.resolve),

  plugins: ["no-inferred-method-name"],

  settings: {},
}
