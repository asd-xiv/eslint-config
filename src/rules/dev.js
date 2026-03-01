/** @satisfies {import("eslint").Linter.Config} */
export default /** @type {const} */ ({
  rules: {
    /*
     * Point to the monorepo root folder since ~all~ most devDependencies
     * used in test, story and config files reside in the root package.json.
     */
    "import/no-extraneous-dependencies": "off",
  },
})
