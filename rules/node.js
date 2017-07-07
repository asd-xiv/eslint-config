/* eslint-env node */

module.exports = {
    rules: {
        // Enforce return after a callback
        "callback-return": 0,

        // Disallow require() outside of the top-level module scope
        "global-require": 0,

        // Enforces error handling in callbacks (node environment)
        "handle-callback-err": 0,

        /*
         * In Node.js, the behavior of the Buffer constructor is different
         * depending on the type of its argument. Passing an argument from
         * user input to Buffer() without validating its type can lead to
         * security vulnerabilities such as remote memory disclosure and
         * denial of service. As a result, the Buffer constructor has been
         * deprecated and should not be used. Use the producer methods
         * Buffer.from, Buffer.alloc, and Buffer.allocUnsafe instead.
         */
        "no-buffer-constructor": "error",

        // Disallow mixing regular variable and require declarations
        "no-mixed-requires": [ 0, false ],

        // Disallow use of new operator with the require function
        "no-new-require": 0,

        // Disallow string concatenation with __dirname and __filename
        "no-path-concat": 0,

        // Disallow process.exit()
        "no-process-exit": 0,

        // Restrict usage of specified node modules
        "no-restricted-modules": 0,

        // Disallow use of synchronous methods (off by default)
        "no-sync": 0,
    },
}
