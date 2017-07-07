# JavaScript ESLint rules

[![npm package version](https://badge.fury.io/js/%40codemachiner%2Feslint-config.svg)](https://badge.fury.io/js/%40codemachiner%2Feslint-config)
[![](https://david-dm.org/codemachiner/eslint-config/dev-status.svg)](https://david-dm.org/codemachiner/eslint-config?type=dev)
[![](https://david-dm.org/codemachiner/eslint-config/peer-status.svg)](https://david-dm.org/codemachiner/eslint-config?type=peer)

Mostly based on the Airbnb styles.

## Installation & Usage

Requires ESLint >= 4.0.0

```bash
npm i eslint @codemachiner/eslint-config --save-dev
```

Run `npm info "@codemachiner/eslint-config@latest" peerDependencies` to get the dev packages you need to include in your own `package.json`.

It should be something like this:
```javascript
...
"devDependencies": {
    "eslint": "^4.1.1",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-json": "^1.2.0",
    "eslint-plugin-no-inferred-method-name": "^1.0.2",
    "eslint-plugin-promise": "^3.5.0",
    "eslint-plugin-flowtype": "^2.34.1",
    "eslint-plugin-html": "^3.0.0",
    "eslint-plugin-unicorn": "^2.1.2"
}
...
```
Add `@codemachiner/eslint-config/rules/frontend` (or `/backend`) to the extends section of your `.eslintrc` configuration file:

```json
{
    "extends": [
        "@codemachiner/eslint-config/rules/frontend",
    ]
}
```

## Plugins used

* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Support for ES2015+ (ES6+) import/export syntax. 
Can be loaded separately from `@codemachiner/eslint-config/rules/import`

* [eslint-plugin-json](https://www.npmjs.com/package/eslint-plugin-json) - Lint JSON files

* [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) - Enforce best practices for JavaScript promises
Can be loaded separately from `@codemachiner/eslint-config/rules/promise`

* [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) - Various awesome ESLint rules
Can be loaded separately from `@codemachiner/eslint-config/rules/unicorn`

* [eslint-plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype) - Flow is a static type checker for your JavaScript code. It does a lot of work to make you more productive. Making you code faster, smarter, more confidently, and to a bigger scale.
Can be loaded separately from `@codemachiner/eslint-config/rules/flow`

* [eslint-plugin-no-inferred-method-name](https://www.npmjs.com/package/eslint-plugin-no-inferred-method-name) - In ES6, compact methods and unnamed function expression assignments within object literals do not create a lexical identification (name) binding that corresponds to the function name identifier for recursion or event binding. The compact method syntax will not be an appropriate option for these types of solutions, and a named function expression should be used instead. This custom ESLint rule will identify instances where a function name is being called and a lexical identifier is unavailable within a compact object literal.

* [eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html) - Allows linting and fixing inline scripts contained in HTML files. Included in the `frontend` stack.

## Bio

* [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)
* [Configuring ESLint](http://eslint.org/docs/user-guide/configuring)
