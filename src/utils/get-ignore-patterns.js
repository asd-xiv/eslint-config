import { includeIgnoreFile } from "@eslint/config-helpers"

/**
 * @callback GetIgnorePatternsFn
 *
 * @param {string} file - Absolute path to a gitignore-style file.
 *
 * @returns {string[]} The patterns of the file, as ESLint globs.
 */

/**
 * Read a gitignore-style file and return its patterns as ESLint globs. ESLint
 * resolves them from the folder of the config that uses them.
 *
 * A pattern with no slash, or only a trailing slash, matches at any depth, as in
 * git: `dist` becomes `**\/dist`. A `!` pattern keeps its negation.
 *
 * @throws {Error} If the path is not absolute or the file does not exist.
 *
 * @example
 *  const GIT_IGNORE_PATTERNS = getIgnorePatterns(
 *    path.join(import.meta.dirname, ".gitignore")
 *  )
 *  //=> ["**\/node_modules", "**\/dist", "!**\/.env.example", …]
 *
 * @type {GetIgnorePatternsFn}
 */
const getIgnorePatterns = file => includeIgnoreFile(file).ignores ?? []

export { getIgnorePatterns }
