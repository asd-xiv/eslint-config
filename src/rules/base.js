/** @satisfies {import("eslint").Linter.Config} */
export default /** @type {const} */ ({
  rules: {
    // Allow default named exports, ie. `export { asd as default } from "lorem.js"`,
    // to avoid conflicts with "unicorn/prefer-export-from"
    "no-restricted-exports": [
      "error",
      {
        restrictDefaultExports: {
          named: false,
          namedFrom: false,
        },
      },
    ],
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_dirname", "_testResult"],
        allowInArrayDestructuring: true,
        allowInObjectDestructuring: true,
      },
    ],
  },
})
