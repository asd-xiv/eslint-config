import { nodeConfig } from "./node.js"
import tsConfig from "../rules/typescript.js"

/** @satisfies {import("eslint").Linter.Config} */
const tsNodeConfig = /** @type {const} */ ({
  name: "ASD14 config for Typescript + Node.js source files",
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

export { commonIgnores } from "../rules/ignores.js"
export { tsNodeConfig }
