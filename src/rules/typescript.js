import tsPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"

/** @satisfies {import("eslint").Linter.Config} */
export default /** @type {const} */ ({
  languageOptions: {
    parser: tsParser,
  },
  plugins: {
    "@typescript-eslint": /** @type {any} */ (tsPlugin),
  },
  rules: {
    ...tsPlugin.configs["strict-type-checked"]?.rules,

    // Temporary: disable due to bug in ESLint 9.39.0
    // https://github.com/eslint/eslint/issues/20272
    "@typescript-eslint/unified-signatures": "off",

    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],

    //
    "@typescript-eslint/require-await": "warn",

    // Conflicts with TypeScript's own error where accessing a property that
    // doesn't exist on a type must be accessed with index notation.
    "@typescript-eslint/dot-notation": "off",

    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowBoolean: true,
        allowNumber: true,
      },
    ],

    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-use-before-define": "error",

    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        leadingUnderscore: "allow",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        leadingUnderscore: "allow",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        custom: {
          regex:
            "^(?:(?:is|has|can|does|should|will|did|was|are|show|default(?:Is|Has|Can|Does|Should|Will|Did|Was|Are|Show))[A-Z][A-Za-z0-9]*|(?:DEFAULT_)?(?:IS|HAS|CAN|DOES|SHOULD|WILL|DID|WAS|ARE|SHOW)_[A-Z0-9_]+)$",
          match: true,
        },
      },
      {
        selector: "variable",
        types: ["boolean", "number", "string", "array"],
        modifiers: ["const", "global"],
        leadingUnderscore: "allow",
        format: ["UPPER_CASE"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
      },
      {
        selector: [
          "classProperty",
          "objectLiteralProperty",
          "typeProperty",
          "classMethod",
          "objectLiteralMethod",
          "typeMethod",
          "accessor",
          "enumMember",
        ],
        format: [],
      },
    ],
  },
})
