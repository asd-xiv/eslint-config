module.exports = {
    "rules": {
        // Enforces the consistent use of empty lines.
        "no-multiple-empty-lines": [ "error", {
            "max": 2,
            "maxBOF": 0,
            "maxEOF": 1,
        } ],

        // Enforces the consistent use of either backticks, double, or single
        // quotes.
        "quotes": [ "error", "double" ],

        // Disallows semicolons as the end of statements.
        "semi": [ "error", "never" ],

        // Checks all property definitions of object expressions and verifies
        // that all variables are sorted alphabetically.
        "sort-keys": [ "error", "asc", {
            "caseSensitive": true,
            "natural": true,
        } ],
    },
}
