/* eslint-env node */

module.exports = {
    env: {
        browser: false,
        es6    : true,
        node   : true,
    },
    extends: [
        "./frontend",
        "./node",
    ].map( require.resolve ),
}
