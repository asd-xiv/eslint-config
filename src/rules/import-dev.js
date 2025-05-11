import path from "node:path"
import { findUpSync } from "../utils/find-up-sync.js"

const MONOREPO_ROOT = path.dirname(findUpSync("nx.json"))

/** @satisfies {import("eslint").Linter.Config} */
export default /** @type {const} */ ({
  files: [
    "type-tests/**/*.{js,jsx,ts,tsx}",
    "*.tt.{js,jsx,ts,tsx}",
    "tests/**/*.{js,jsx,ts,tsx}",
    "*.test.{js,jsx,ts,tsx}",
    "stories/**/*.{js,jsx,ts,tsx}",
    "*.stories.{js,jsx,ts,tsx}",
    "eslint.config.js",
    "jest.setup.js",
    "jest.config.js",
  ],
  rules: {
    /*
     * Point to the monorepo root folder since ~all~ most devDependencies
     * used in test, story and config files reside in the root package.json.
     */
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: ["./", MONOREPO_ROOT],
      },
    ],
  },
})
