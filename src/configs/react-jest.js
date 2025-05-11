import { nodeJestConfig } from "./node-jest.js"
import rtlConfig from "../rules/rtl.js"

/** @satisfies {import("eslint").Linter.Config} */
export const reactJestConfig = /** @type {const} */ ({
  ...nodeJestConfig,
  name: "ASD14 config for React test files",
  plugins: {
    ...nodeJestConfig.plugins,
    ...rtlConfig.plugins,
  },
  rules: {
    ...nodeJestConfig.rules,
    ...rtlConfig.rules,
  },
})
