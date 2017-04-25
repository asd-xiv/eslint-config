module.exports = {
    env: {
        browser: false,
        node: true,
        es6: true,
    },
    plugins: [
        "json",
        "no-inferred-method-name",
    ],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module",
        ecmaFeatures: {
            impliedStrict: true,
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        // enforces the consistent use of either backticks, double, or single
        // quotes
        quotes: [ "error", "double" ],

        // require that all functions are run in strict mode
        strict: [ "error", "never" ],

        // disallows semicolons as the end of statements
        semi: [ "error", "never" ],
    },
}
