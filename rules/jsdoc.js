/* eslint-env node */

module.exports = {
  plugins: ["jsdoc"],

  extends: ["plugin:eslint-plugin-jsdoc/recommended"],

  rules: {
    /*
     * JSDoc is a JavaScript API documentation generator. It uses
     * specially-formatted comments inside of code to generate API
     * documentation automatically.
     */
    "require-jsdoc": [
      "error",
      {
        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: false,
          FunctionDeclaration: true,
          MethodDefinition: false,
        },
      },
    ],

    // Leave it up to jsdoc plugin
    "valid-jsdoc": "off",

    // Noise
    "jsdoc/require-param-description": "off",
    "jsdoc/require-returns-description": "off",
    "jsdoc/require-property-description": "off",

    "jsdoc/check-indentation": [
      "error",
      { excludeTags: ["example", "type", "typedef"] },
    ],

    "jsdoc/check-line-alignment": ["error", "always"],
  },
}
