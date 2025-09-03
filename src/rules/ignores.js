/**
 * Common ignore patterns for ESLint flat configs
 * These are build outputs and dependencies that should never be linted
 */
export const commonIgnores = [
  "node_modules/**",
  "dist/**",
  "coverage/**",
  "build/**",
  ".next/**",
  ".nuxt/**",
  "out/**",
  "tmp/**",
  "temp/**",
]
