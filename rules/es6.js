module.exports = {
    rules: {
        // suggest using arrow functions as callbacks
        "prefer-arrow-callback": "warn",

        // require braces in arrow function body
        "arrow-body-style": [ "error", "as-needed" ],

        // require parens in arrow function arguments
        "arrow-parens": [ "error", "as-needed" ],

        // require space before/after arrow function's arrow
        "arrow-spacing": [ "error", {
            "before": true,
            "after": true,
        } ],

        // verify super() callings in constructors
        "constructor-super": 0,

        // enforce the spacing around the * in generator functions
        "generator-star-spacing": 0,

        // disallow generator functions that do not have yield
        "require-yield": 0,

        // disallow arrow functions where a condition is expected
        "no-arrow-condition": 0,

        // disallow modifying variables of class declarations
        "no-class-assign": 0,

        // disallow modifying variables that are declared using const
        "no-const-assign": "error",

        // disallow duplicate name in class members
        "no-dupe-class-members": 0,

        // disallow to use this/super before super() calling in constructors.
        "no-this-before-super": 0,

        // require let or const instead of var
        "no-var": "error",

        // require method and property shorthand syntax for object literals
        "object-shorthand": [ "warn", "always" ],

        // suggest using of const declaration for variables that are never
        // modified after declared
        "prefer-const": "error",

        // suggest using Reflect methods where applicable
        "prefer-reflect": 0,

        // suggest using the spread operator instead of .apply()
        "prefer-spread": 0,

        // suggest using template literals instead of strings concatenation
        "prefer-template": "error",
    },
}
