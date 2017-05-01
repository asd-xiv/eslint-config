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
        // require that all functions are run in strict mode
        strict: [ "error", "never" ],
    },
}
