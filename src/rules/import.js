import importPlugin from "eslint-plugin-import"

const importConfig = importPlugin.flatConfigs.recommended
const importTSConfig = importPlugin.flatConfigs.typescript

/** @satisfies {import("eslint").Linter.Config} */
export default /** @type {const} */ ({
  plugins: importConfig.plugins,
  rules: {
    ...importConfig.rules,
    ...importTSConfig.rules,
    "import/no-extraneous-dependencies": ["error", { includeTypes: true }],
    "import/no-cycle": ["error", { maxDepth: Infinity }],
    "import/no-self-import": "error",
    "import/no-absolute-path": "error",
    "import/default": "error",
    "import/export": "error",
    "import/prefer-default-export": "off",
    "import/namespace": ["error", { allowComputed: true }],
    "import/no-duplicates": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/unambiguous": "off",
    "import/exports-last": "error",
    "import/named": "off",
    "import/no-unresolved": "off",
    "import/extensions": ["error", "always", { ignorePackages: true }],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["index", "sibling", "parent"],
          "object",
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "@self-ui/*",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: importTSConfig.settings,
})
