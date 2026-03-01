import { nodeConfig } from "./node.js"
import devConfig from "../rules/dev.js"
import commonIgnores from "../rules/ignores.js"
import typescriptConfig from "../rules/typescript.js"

/** @satisfies {import("eslint").Linter.Config} */
const tsConfig = /** @type {const} */ ({
  name: "ASD14 config for Typescript + Node.js source files",
  languageOptions: {
    ...nodeConfig.languageOptions,
    ...typescriptConfig.languageOptions,
  },
  plugins: {
    ...typescriptConfig.plugins,
    ...nodeConfig.plugins,
  },
  rules: {
    ...typescriptConfig.rules,
    ...nodeConfig.rules,
  },
  settings: {
    ...nodeConfig.settings,
  },
})

export { commonIgnores, devConfig, tsConfig }
