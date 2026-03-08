import jsdoc from "eslint-plugin-jsdoc"

/** @satisfies {import('eslint').Linter.Config} */
export default /** @type {const} */ ({
  plugins: {
    jsdoc,
  },
  rules: {
    "jsdoc/sort-tags": [
      "error",
      {
        reportIntraTagGroupSpacing: false,
        reportTagGroupSpacing: true,
        tagSequence: [
          { tags: ["typedef", "callback"] },
          { tags: ["param", "arg", "argument", "property", "prop"] },
          { tags: ["returns", "return"] },
          { tags: ["throws", "exception"] },
          { tags: ["example"] },
        ],
      },
    ],
    "jsdoc/tag-lines": [
      "error",
      "any",
      {
        startLines: 1,
        endLines: 0,
        applyToEndTag: false,
      },
    ],
    "jsdoc/check-indentation": ["error", { allowIndentedSections: true }],
    "jsdoc/check-alignment": "error",
    "jsdoc/no-bad-blocks": "error",
    "jsdoc/require-asterisk-prefix": ["error", "always"],

    "jsdoc/require-description": "off",
    "jsdoc/require-property-description": "off",
    "jsdoc/require-param-description": "off",
    "jsdoc/require-returns-description": "off",
  },
})
