module.exports = {
    env: {
        browser: false,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            impliedStrict: true,
        },
        ecmaVersion: 2017,
        sourceType: "module",
    },
    plugins: [
        "json",
        "no-inferred-method-name",
    ],
    rules: {
        // require that all functions are run in strict mode
        strict: [ "error", "never" ],
    },
}
