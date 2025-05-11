import nxDev from "../rules/nx-dev.js"
import importDev from "../rules/import-dev.js"

/**
 * ESLint configuration for development files (configs, tests etc)
 *
 * - Configure "import/no-extraneous-dependencies" to allow importing of
 * packages from the root monorepo "node_modules" folder.
 *
 * @satisfies {import("eslint").Linter.Config}
 */
export const devFilesConfig = /** @type {const} */ ({
  rules: {
    ...importDev.rules,
    ...nxDev.rules,
  },
})
