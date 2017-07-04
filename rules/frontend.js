module.exports = {
    env: {
        browser: true,
        es6: true,
        node: false,
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
    extends: [
        "./base",
        "./import",
        "./unicorn",
        "./es6",
        "./errors",
        "./variables",
        "./best.practices",
        "./style",
        "./flow",
    ].map( require.resolve ),
}
