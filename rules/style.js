module.exports = {
    "rules": {
        // enforces the consistent use of empty lines
        "no-multiple-empty-lines": [ "error", {
            "max": 2,
            "maxEOF": 1,
            "maxBOF": 0,
        } ],

        // enforces the consistent use of either backticks, double, or single
        // quotes
        quotes: [ "error", "double" ],

        // disallows semicolons as the end of statements
        semi: [ "error", "never" ],
    },
}
