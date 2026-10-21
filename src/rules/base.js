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
    // A leading `_` marks a private name, see DECISIONS#1
    "no-underscore-dangle": "off",
  },
})
