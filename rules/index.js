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
        "./style",
    ].map( require.resolve ),
}
