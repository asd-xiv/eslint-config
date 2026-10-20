/**
 * Common ignore patterns for ESLint flat configs
 * These are build outputs and dependencies that should never be linted
 *
 * @deprecated Use `getIgnorePatterns(".gitignore")`, so git and ESLint ignore
 * the same files
 */
const commonIgnores = [
  .../** @type {const} */ ([
    "**/.local/**",
    "**/node_modules/**",
    "**/dist/**",
    "**/coverage/**",
    "**/build/**",
    "**/.next/**",
    "**/.nuxt/**",
    "**/out/**",
    "**/tmp/**",
    "**/temp/**",
  ]),
]

export default commonIgnores
