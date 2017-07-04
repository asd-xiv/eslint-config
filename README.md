# JavaScript ESLint rules
[![npm version](https://badge.fury.io/js/%40codemachiner%2Feslint-config.svg)](https://badge.fury.io/js/%40codemachiner%2Feslint-config)
[![](https://david-dm.org/codemachiner/eslint-config/dev-status.svg)](https://david-dm.org/codemachiner/eslint-config?type=dev)
[![](https://david-dm.org/codemachiner/eslint-config/peer-status.svg)](https://david-dm.org/codemachiner/eslint-config?type=peer)

Mostly based on the Airbnb styles.

## Installation

```bash
npm i eslint @codemachiner/eslint-config --save-dev
```

## Usage

Run `npm info "@codemachiner/eslint-config@latest" peerDependencies` to get the dev packages you need to include in your own `package.json`.

It should be something like this:
```javascript
...
"devDependencies": {
    "eslint": "^4.1.1",
    "eslint-plugin-import": "^2.6.1",
    "eslint-plugin-json": "^1.2.0",
    "eslint-plugin-no-inferred-method-name": "^1.0.2",
    "eslint-plugin-flowtype": "^2.34.1",
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

## Contains

### Static type checking with Flow

[eslint-plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype) - Flow is a static type checker for your JavaScript code. It does a lot of work to make you more productive. Making you code faster, smarter, more confidently, and to a bigger scale.


### ES6 Modules

[eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names. All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.

### Disallow Inferred Method Names in Object Literals

[eslint-plugin-no-inferred-method-name](https://www.npmjs.com/package/eslint-plugin-no-inferred-method-name) - In ES6, compact methods and unnamed function expression assignments within object literals do not create a lexical identification (name) binding that corresponds to the function name identifier for recursion or event binding. The compact method syntax will not be an appropriate option for these types of solutions, and a named function expression should be used instead. This custom ESLint rule will identify instances where a function name is being called and a lexical identifier is unavailable within a compact object literal.

In the example below, 1 error is generated because foo is being called recursively when there is no lexical name binding for the foo function using the concise object literal syntax. See links above for in-depth discussion on this behavior.

```javascript
const bar = {
  name: 'Bar',
  types: [
    { f: 'function' },
    { n: 'number' }
  ],
  foo (f, n) {   // this function will not have any lexical binding for recursive calls
    if (typeof f === 'function') {
      f();
    } else {
      throw new Error('foo: A Function is required.');
    }

    n -= 1;
    if (!n) {
      return undefined;
    }

    return foo(f, n);   // error on this line
  }
};

bar.foo(() => {console.log('baz');}, 3);
//baz
//ReferenceError: foo is not defined
```

### Lint JSON files

[eslint-plugin-json](https://www.npmjs.com/package/eslint-plugin-json)

### Various awesome ESLint rules

[eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn)
