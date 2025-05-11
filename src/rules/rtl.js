import rtlPlugin from "eslint-plugin-testing-library"

/** @satisfies {import('eslint').Linter.Config} */
export default /** @type {const} */ ({
  ...rtlPlugin.configs["flat/react"],
})
