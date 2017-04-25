module.exports = {
    rules: {
        // disallow trailing commas in object literals
        "comma-dangle": [ "error", "always-multiline" ],

        // disallow assignment in conditional expressions
        "no-cond-assign": [ "error", "always" ],

        // disallow use of console
        "no-console": 1,

        // disallow use of constant expressions in conditions
        "no-constant-condition": 1,

        // disallow control characters in regular expressions
        "no-control-regex": "error",

        // disallow use of debugger
        "no-debugger": 1,

        // disallow duplicate arguments in functions
        "no-dupe-args": "error",

        // disallow duplicate keys when creating object literals
        "no-dupe-keys": "error",

        // disallow a duplicate case label.
        "no-duplicate-case": "error",

        // disallow the use of empty character classes in regular expressions
        "no-empty-character-class": "error",

        // disallow empty statements
        "no-empty": "error",

        // disallow assigning to the exception in a catch block
        "no-ex-assign": "error",

        // disallow double-negation boolean casts in a boolean context
        "no-extra-boolean-cast": 0,

        // disallow unnecessary parentheses
        "no-extra-parens": [ "error", "functions" ],

        // disallow unnecessary semicolons
        "no-extra-semi": "error",

        // disallow overwriting functions written as function declarations
        "no-func-assign": "error",

        // disallow function or variable declarations in nested blocks
        "no-inner-declarations": "error",

        // disallow invalid regular expression strings in the RegExp
        // constructor
        "no-invalid-regexp": "error",

        // disallow irregular whitespace outside of strings and comments
        "no-irregular-whitespace": "error",

        // disallow negation of the left operand of an in expression
        "no-negated-in-lhs": "error",

        // disallow the use of object properties of the global object (Math
        // and JSON) as functions
        "no-obj-calls": "error",

        // disallow multiple spaces in a regular expression literal
        "no-regex-spaces": "error",

        // This rule disallows sparse array literals which have "holes" where
        // commas are not preceded by elements. It does not apply to a
        // trailing comma following the last element.
        "no-sparse-arrays": "error",

        // Avoid code that looks like two expressions but is actually one
        "no-unexpected-multiline": 0,

        // disallow unreachable statements after a return, throw, continue, or
        // break statement
        "no-unreachable": "error",

        // disallow comparisons with the value NaN
        "use-isnan": "error",

        // ensure JSDoc comments are valid
        "valid-jsdoc": 0,

        // ensure that the results of typeof are compared against a valid
        // string
        "valid-typeof": "error",
    },
}
