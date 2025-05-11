import tsParser from "@typescript-eslint/parser"
import tsPlugin from "@typescript-eslint/eslint-plugin"

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
        format: ["camelCase", "PascalCase"],
        prefix: ["is", "has", "can", "does", "should", "will", "did", "was"],
      },
      {
        selector: "variable",
        types: ["boolean", "number", "string", "array"],
        modifiers: ["const", "global"],
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
