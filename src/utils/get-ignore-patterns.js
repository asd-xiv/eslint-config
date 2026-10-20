import fs from "node:fs"
import path from "node:path"

/**
 * Convert one gitignore pattern to an ESLint glob.
 *
 * Ported from `convertIgnorePatternToMinimatch` in @eslint/config-helpers
 * 0.7.0, Apache-2.0, https://github.com/eslint/rewrite. Replace it with
 * `includeIgnoreFile` from `eslint/config` once on ESLint 10.
 *
 * @param {string} pattern - One line of a gitignore-style file.
 *
 * @returns {string} The pattern as an ESLint glob.
 */
const convertIgnorePattern = pattern => {
  const isNegated = pattern.startsWith("!")
  const negatedPrefix = isNegated ? "!" : ""
  const patternToTest = (isNegated ? pattern.slice(1) : pattern).trimEnd()

  if (["", "**", "/**", "**/"].includes(patternToTest)) {
    return `${negatedPrefix}${patternToTest}`
  }

  const firstIndexOfSlash = patternToTest.indexOf("/")

  // No slash, or only a trailing one, matches at any depth, as in git
  const matchEverywherePrefix =
    firstIndexOfSlash === -1 || firstIndexOfSlash === patternToTest.length - 1
      ? "**/"
      : ""

  const patternWithoutLeadingSlash =
    firstIndexOfSlash === 0 ? patternToTest.slice(1) : patternToTest

  // Escape `{` and `(`, which gitignore reads as literals and minimatch does not
  const escapedPattern = patternWithoutLeadingSlash.replaceAll(
    /(?=((?:\\.|[^{(])*))\1([{(])/guy,
    String.raw`$1\$2`
  )

  // `dir/**` in git also matches the files inside `dir`
  const matchInsideSuffix = patternToTest.endsWith("/**") ? "/*" : ""

  return `${negatedPrefix}${matchEverywherePrefix}${escapedPattern}${matchInsideSuffix}`
}

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
const getIgnorePatterns = file => {
  if (!path.isAbsolute(file)) {
    throw new Error(`The ignore file must be an absolute path, got "${file}"`)
  }

  return fs
    .readFileSync(file, "utf8")
    .split(/\r?\n/u)
    .map(line => line.trim())
    .filter(line => line !== "" && !line.startsWith("#"))
    .map(convertIgnorePattern)
}

export { getIgnorePatterns }
