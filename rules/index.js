module.exports = {
    extends: [
        "./base",
        "./import",
        "./unicorn",
        "./es6",
        "./node",
        "./errors",
        "./variables",
        "./best.practices",
    ].map( require.resolve ),
}
