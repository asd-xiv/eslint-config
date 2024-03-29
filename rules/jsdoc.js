/*
 * JSDoc is a JavaScript API documentation generator. It uses
 * specially-formatted comments inside of code to generate API
 * documentation automatically.
 */

module.exports = {
  plugins: ["jsdoc"],

  extends: ["plugin:eslint-plugin-jsdoc/recommended"],

  rules: {
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

    "valid-jsdoc": [
      "error",
      {
        requireParamType: false,
        requireParamDescription: false,
        requireReturnType: false,
        requireReturnDescription: false,

        prefer: {
          arg: "param",
          argument: "param",
          class: "constructor",
          return: "returns",
          virtual: "abstract",
        },

        preferType: {
          Boolean: "boolean",
          Number: "number",
          object: "object",
          String: "string",
        },
      },
    ],

    // Allow lines between tags
    "jsdoc/tag-lines": "off",

    "jsdoc/check-tag-names": [
      "warn",
      {
        definedTags: [
          "tag",
          "signature",
          "api",
          "apiDefine",
          "apiDeprecated",
          "apiDescription",
          "apiError",
          "apiErrorExample",
          "apiExample",
          "apiGroup",
          "apiHeader",
          "apiHeaderExample",
          "apiIgnore",
          "apiName",
          "apiParam",
          "apiParamExample",
          "apiPermission",
          "apiPrivate",
          "apiSampleRequest",
          "apiSuccess",
          "apiSuccessExample",
          "apiUse",
          "apiVersion",
        ],
      },
    ],

    // Noise
    "jsdoc/require-param-description": "off",
    "jsdoc/require-returns-description": "off",
    "jsdoc/require-property-description": "off",
    "jsdoc/check-types": "off",

    "jsdoc/check-indentation": [
      "error",
      { excludeTags: ["example", "param", "returns", "type", "typedef"] },
    ],

    "jsdoc/check-line-alignment": [
      "error",
      "always",
      {
        tags: ["param", "arg", "argument", "property", "prop"],
      },
    ],
  },
}
