<!-- markdownlint-disable no-duplicate-header -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.5.0] - 16 July 2017

Added [`eslint-plugin-compat`](https://www.npmjs.com/package/eslint-plugin-compat) to show browser compatibility (using [caniuse](http://caniuse.com/)) of certain functionalities, ex. `fetch`.

### Added

- `eslint-plugin-compat` with rules in [`/rules/compat.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/compat.js)

### Changed

- Turn off `react/require-optimization`. Better put these kind of rules in your project's `.eslintrc`

## [2.4.0] - 13 July 2017

React support

### Added

- `eslint-plugin-react` with recommended rules in [`/rules/react.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/react.js)

## 2.3.2 - 11 July 2017

### Added

- ESLint 4.2: new rule [`getter-return`](http://eslint.org/docs/rules/getter-return) -  Enforces that a return statement is present in property getters.
    - Defined in [`error.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/errors.js)
    - Current value: `"getter-return": "error"`

### Changed

- ESLint 4.2 allows [`no-sync`](http://eslint.org/docs/rules/no-sync) using sync methods on top level.
    - Defined in [`node.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/node.js)
    - Current value:

    ```javascript
    "no-sync": [
        "error", {
            allowAtRootLevel: true,
        },
    ],
    ```
- [`no-unexpected-multiline`](http://eslint.org/docs/rules/no-unexpected-multiline) to protect against edge cases of not using semicolons
    - Defined in [`error.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/errors.js):
    - Current value: `"no-unexpected-multiline": "error"`

[Unreleased]: https://github.com/codemachiner/eslint-rules/compare/v2.5.0...HEAD
[2.5.0]: https://github.com/codemachiner/eslint-rules/compare/v2.4.0...v2.5.0
[2.4.0]: https://github.com/codemachiner/eslint-rules/compare/v2.3.2...v2.4.0
