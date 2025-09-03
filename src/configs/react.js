import prettierConfig from "eslint-plugin-prettier/recommended"
import globals from "globals"

import { nodeJestConfig } from "./node.js"
import baseConfig from "../rules/base.js"
import importConfig from "../rules/import.js"
import jsdocConfig from "../rules/jsdoc.js"
import reactHooksConfig from "../rules/react.js"
import rtlConfig from "../rules/rtl.js"
import tsConfig from "../rules/typescript.js"
import unicornConfig from "../rules/unicorn.js"

/** @type {import("eslint").Linter.RulesRecord} */
const reactSpecificRules = {
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
        props: false,
        opts: {
          props: true,
        },
        options: {
          props: true,
        },
        fn: false,
        acc: false,
      },
    },
  ],
}

/** @satisfies {import("eslint").Linter.Config} */
const reactConfig = /** @type {const} */ ({
  name: "ASD14 config for React source files",
  ignores: ["node_modules", "dist", "coverage", "build"],
  languageOptions: {
    ...tsConfig.languageOptions,
    ecmaVersion: "latest",
    sourceType: "module",
    parserOptions: {
      projectService: true,
      ecmaVersion: "latest",
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.serviceworker,
      ...globals.browser,
    },
  },
  plugins: {
    ...importConfig.plugins,
    ...jsdocConfig.plugins,
    ...reactHooksConfig.plugins,
    ...tsConfig.plugins,
    ...unicornConfig.plugins,
    ...prettierConfig.plugins,
  },
  rules: {
    ...baseConfig.rules,
    ...importConfig.rules,
    ...jsdocConfig.rules,
    ...reactHooksConfig.rules,
    ...reactSpecificRules,
    ...tsConfig.rules,
    ...unicornConfig.rules,
    ...prettierConfig.rules,
  },
  settings: {
    ...importConfig.settings,
    ...reactHooksConfig.settings,

    /*
     * A list of regex strings that, if matched by a path, will not report
     * the matching module if no exports are found.
     */
    "import/ignore": [".(sass|scss|less|css)$"],
  },
})

/** @satisfies {import("eslint").Linter.Config} */
const reactJestConfig = /** @type {const} */ ({
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

export { commonIgnores } from "../rules/ignores.js"
export { reactConfig, reactJestConfig }
