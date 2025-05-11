import jestPlugin from "eslint-plugin-jest"

const jestConfig = jestPlugin.configs["flat/recommended"]

/** @satisfies {import("eslint").Linter.Config} */
export const nodeJestConfig = /** @type {const} */ ({
  name: "ASD14's config for Node.js test files",
  languageOptions: jestConfig.languageOptions,
  plugins: jestConfig.plugins,
  rules: {
    ...jestConfig.rules,
    "jest/require-top-level-describe": "error",
    "jest/consistent-test-it": [
      "error",
      {
        fn: "test",
        withinDescribe: "test",
      },
    ],
    "jest/valid-title": [
      "error",
      {
        mustMatch: {
          test: "^given \\[.*\\] should \\[.*\\]$",
        },
      },
    ],
  },
})
