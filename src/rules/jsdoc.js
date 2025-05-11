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
        reportTagGroupSpacing: false,
      },
    ],
    "jsdoc/tag-lines": [
      "error",
      "always",
      {
        startLines: 1,
        endLines: 0,
        applyToEndTag: false,
        tags: {
          returns: {
            lines: "always",
          },
          property: {
            lines: "any",
          },
          param: {
            lines: "any",
          },
          example: {
            lines: "always",
          },
        },
      },
    ],
    "jsdoc/check-indentation": "error",
    "jsdoc/check-alignment": "error",
    "jsdoc/no-bad-blocks": "error",
    "jsdoc/require-asterisk-prefix": ["error", "always"],

    "jsdoc/require-description": "off",
    "jsdoc/require-property-description": "off",
    "jsdoc/require-param-description": "off",
    "jsdoc/require-returns-description": "off",
  },
})
