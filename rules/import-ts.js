/* eslint-env node */

module.exports = {
  rules: {
    /*
     * TypeScript compilation already ensures that named imports exist in the
     * referenced module
     */
    "import/named": "off",

    // Typescript handles file resolving
    "import/no-unresolved": "off",

    /*
     * A list of file extensions that will be parsed as modules and
     * inspected for exports.
     */
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        ts: "never",
      },
    ],
  },

  settings: {
    "import/external-module-folders": ["node_modules", "node_modules/@types"],

    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },

    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".d.ts", ".js", ".jsx"],
      },
    },
  },
}
