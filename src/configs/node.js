import prettierConfig from "eslint-plugin-prettier/recommended"
import globals from "globals"

import baseConfig from "../rules/base.js"
import importConfig from "../rules/import.js"
import jsdocConfig from "../rules/jsdoc.js"
import unicornConfig from "../rules/unicorn.js"

/** @type {import("eslint").Linter.RulesRecord} */
const nodeSpecificRules = {
  "no-console": "off",
  "unicorn/prevent-abbreviations": [
    "error",
    {
      replacements: {
        i: false,
        params: false,
        lib: false,
        args: {
          params: true,
        },
        props: {
          options: true,
        },
        fn: false,
        acc: false,
      },
    },
  ],
}

/** @satisfies {import("eslint").Linter.Config} */
export const nodeConfig = /** @type {const} */ ({
  name: "ASD14 config for Node.js source files",
  ignores: ["node_modules", "dist", "coverage", "build"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parserOptions: {
      projectService: true,
      ecmaVersion: "latest",
    },
    globals: {
      ...globals.node,
    },
  },
  plugins: {
    ...importConfig.plugins,
    ...jsdocConfig.plugins,
    ...unicornConfig.plugins,
    ...prettierConfig.plugins,
  },
  rules: {
    ...baseConfig.rules,
    ...importConfig.rules,
    ...jsdocConfig.rules,
    ...unicornConfig.rules,
    ...nodeSpecificRules,
    ...prettierConfig.rules,
  },

  settings: {
    ...importConfig.settings,
  },
})
