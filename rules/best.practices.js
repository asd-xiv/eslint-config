module.exports = {
    "rules": {
        // Enforces getter/setter pairs in objects
        "accessor-pairs": 0,

        // treat var statements as if they were block scoped
        "block-scoped-var": "error",

        // specify the maximum cyclomatic complexity allowed in a program
        "complexity": [ 0, 11 ],

        // require return statements to either always or never specify values
        "consistent-return": "error",

        // specify curly brace conventions for all control statements
        "curly": [ "error", "multi-line" ],

        // require default case in switch statements
        "default-case": "error",

        // enforces consistent newlines before or after dots
        "dot-location": 0,

        // encourages use of dot notation whenever possible
        "dot-notation": [ "error", {
            "allowKeywords": true,
        } ],

        // require the use of === and !==
        "eqeqeq": "error",

        // make sure for-in loops have an if statement
        "guard-for-in": "error",

        // disallow the use of alert, confirm, and prompt
        "no-alert": 1,

        // disallow use of arguments.caller or arguments.callee
        "no-caller": "error",

        // disallow lexical declarations in case clauses
        "no-case-declarations": "error",

        // disallow division operators explicitly at beginning of regular expression
        "no-div-regex": 0,

        // disallow else after a return in an if
        "no-else-return": "error",

        // disallow use of labels for anything other then loops and switches
        "no-label": 0,

        // disallow use of empty destructuring patterns
        "no-empty-pattern": 0,

        // disallow comparisons to null without a type-checking operator
        "no-eq-null": 0,

        // disallow use of eval()
        "no-eval": "error",

        // disallow adding to native types
        "no-extend-native": "error",

        // disallow unnecessary function binding
        "no-extra-bind": "error",

        // disallow fallthrough of case statements
        "no-fallthrough": "error",

        // disallow the use of leading or trailing decimal points in numeric
        // literals
        "no-floating-decimal": "error",

        // disallow the type conversions with shorter notations
        "no-implicit-coercion": 0,

        // disallow use of eval()-like methods
        "no-implied-eval": "error",

        // disallow this keywords outside of classes or class-like objects
        "no-invalid-this": 0,

        // disallow usage of __iterator__ property
        "no-iterator": "error",

        // disallow use of labeled statements
        "no-labels": "error",

        // disallow unnecessary nested blocks
        "no-lone-blocks": "error",

        // disallow creation of functions within loops
        "no-loop-func": "error",

        // disallow the use of magic numbers
        "no-magic-numbers": 0,

        // disallow use of multiple spaces
        "no-multi-spaces": "error",

        // disallow use of multiline strings
        "no-multi-str": "error",

        // disallow reassignments of native objects
        "no-native-reassign": "error",

        // disallow use of new operator for Function object
        "no-new-func": "error",

        // disallows creating new instances of String,Number, and Boolean
        "no-new-wrappers": "error",

        // disallow use of new operator when not part of the assignment or comparison
        "no-new": "error",

        // disallow use of octal escape sequences in string literals, such as
        // var foo = "Copyright \251";
        "no-octal-escape": "error",

        // disallow use of (old style) octal literals
        "no-octal": "error",

        // codemach: disallow reassignment of function parameters
        "no-param-reassign": [ "error", {
            "props": false,
        } ],

        // disallow use of process.env
        "no-process-env": 0,

        // disallow usage of __proto__ property
        "no-proto": "error",

        // disallow declaring the same variable more then once
        "no-redeclare": "error",

        // disallow use of assignment in return statement
        "no-return-assign": "error",

        // disallow use of `javascript:` urls.
        "no-script-url": "error",

        // disallow comparisons where both sides are exactly the same
        "no-self-compare": "error",

        // disallow use of comma operator
        "no-sequences": "error",

        // restrict what can be thrown as an exception
        "no-throw-literal": "error",

        // disallow usage of expressions in statement position
        "no-unused-expressions": "error",

        // disallow unnecessary .call() and .apply()
        "no-useless-call": 0,

        // disallow unnecessary concatenation of literals or template literals
        "no-useless-concat": 0,

        // disallow use of void operator
        "no-void": 0,

        // disallow usage of configurable warning terms in comments: e.g. todo
        "no-warning-comments": [ 0, {
            "terms": [ "todo", "fixme", "xxx" ],
            "location": "start",
        } ],

        // disallow use of the with statement
        "no-with": "error",

        // require use of the second argument for parseInt()
        "radix": "error",

        // requires to declare all vars on top of their containing scope
        "vars-on-top": "error",

        // require immediate function invocation to be wrapped in parentheses
        "wrap-iife": [ "error", "outside" ],

        // require or disallow Yoda conditions
        "yoda": 0,
    },
}
