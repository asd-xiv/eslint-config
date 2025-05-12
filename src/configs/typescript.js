import { nodeConfig } from "./node.js"
import tsConfig from "../rules/typescript.js"

/** @satisfies {import("eslint").Linter.Config} */
export const tsNodeConfig = /** @type {const} */ ({
  name: "ASD14 config for Typescript + Node.js source files",
  ignores: ["node_modules", "dist", "coverage", "build"],
  languageOptions: {
    ...nodeConfig.languageOptions,
    ...tsConfig.languageOptions,
  },
  plugins: {
    ...tsConfig.plugins,
    ...nodeConfig.plugins,
  },
  rules: {
    ...tsConfig.rules,
    ...nodeConfig.rules,
  },
  settings: {
    ...nodeConfig.settings,
  },
})
