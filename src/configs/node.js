import prettierConfig from "eslint-plugin-prettier/recommended"
import globals from "globals"

import baseConfig from "../rules/base.js"
import devConfig from "../rules/dev.js"
import commonIgnores from "../rules/ignores.js"
import importConfig from "../rules/import.js"
import jsdocConfig from "../rules/jsdoc.js"
import unicornConfig from "../rules/unicorn.js"

/** @type {import("eslint").Linter.RulesRecord} */
const nodeSpecificRules = {
  "no-console": "off",
  "unicorn/prevent-abbreviations": [
    "error",
    {
      // ignore identifiers and filenames (basename only)
      ignore: ["utils", "db"],
      replacements: {
        // allow
        acc: false,
        dir: false,
        fn: false,
        i: false,
        j: false,
        lib: false,
        params: false,

        // rewrite
        args: {
          params: true,
        },
        folder: {
          dir: true,
        },
        props: {
          params: true,
        },
      },
    },
  ],
}

/** @satisfies {import("eslint").Linter.Config} */
const nodeConfig = /** @type {const} */ ({
  name: "ASD14 config for Node.js source files",
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

export { commonIgnores, devConfig, nodeConfig }
