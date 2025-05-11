import prettierConfig from "eslint-plugin-prettier/recommended"
import globals from "globals"

import baseConfig from "./src/rules/base.js"
import jsdocConfig from "./src/rules/jsdoc.js"
import unicornConfig from "./src/rules/unicorn.js"
import tsConfig from "./src/rules/typescript.js"

/** @satisfies {import("eslint").Linter.Config} */
export default /** @type {const} */ ({
  files: ["src/**/*.js", "types/*.d.ts", "eslint.config.js"],
  ignores: ["node_modules", "dist", "coverage"],
  languageOptions: {
    ...tsConfig.languageOptions,
    ecmaVersion: "latest",
    sourceType: "module",
    parserOptions: {
      projectService: true,
      ecmaVersion: "latest",
      tsconfigRootDir: import.meta.dirname,
    },
    globals: {
      ...globals.node,
    },
  },
  plugins: {
    ...unicornConfig.plugins,
    ...jsdocConfig.plugins,
    ...prettierConfig.plugins,
  },
  rules: {
    ...baseConfig.rules,
    ...unicornConfig.rules,
    ...jsdocConfig.rules,
    ...prettierConfig.rules,
  },
})
