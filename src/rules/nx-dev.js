/** @satisfies {import("eslint").Linter.Config} */
export default /** @type {const} */ ({
  /*
   * Configuration files dont need any visibility restrictions since
   * they are only for development and build purposes and are not
   * emited in the final bundle/public artifacts.
   */
  files: ["jest.setup.{ts,js}", "jest.config.{ts,js}", "eslint.config.js"],
  rules: {
    "@nx/enforce-module-boundaries": [
      "error",
      {
        allow: [],
        depConstraints: [
          {
            sourceTag: "*",
            onlyDependOnLibsWithTags: ["type:lib"],
          },
        ],
      },
    ],
  },
})
