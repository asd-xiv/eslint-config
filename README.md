# JavaScript ESLint rules

[![npm package version](https://badge.fury.io/js/%40codemachiner%2Feslint-config.svg)](https://badge.fury.io/js/%40codemachiner%2Feslint-config)
[![](https://david-dm.org/codemachiner/eslint-config/dev-status.svg)](https://david-dm.org/codemachiner/eslint-config?type=dev)
[![](https://david-dm.org/codemachiner/eslint-config/peer-status.svg)](https://david-dm.org/codemachiner/eslint-config?type=peer)

> JavaScript ESLint bundle with best practices and common use rules for writing more consistent code.
>
> [`"semi": [ "error", "never" ]`](http://eslint.org/docs/rules/semi) :godmode: ... [the horror](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding) :goberserk:

Other bundles: [XO](https://www.npmjs.com/package/xo), [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-config-google](https://github.com/google/eslint-config-google), [more](https://www.npmjs.com/search?q=+eslint-config-)

---

<!-- MarkdownTOC depth=2 autolink=true indent="    " -->

- [Installation & Usage](#installation--usage)
- [ESLint plugins used](#eslint-plugins-used)
    - [eslint-plugin-import](#eslint-plugin-import)
    - [eslint-plugin-json](#eslint-plugin-json)
    - [eslint-plugin-promise](#eslint-plugin-promise)
    - [eslint-plugin-unicorn](#eslint-plugin-unicorn)
    - [eslint-plugin-flowtype](#eslint-plugin-flowtype)
    - [eslint-plugin-html](#eslint-plugin-html)
    - [eslint-plugin-react](#eslint-plugin-react)
    - [eslint-plugin-no-inferred-method-name](#eslint-plugin-no-inferred-method-name)
- [Using with SublimeText](#using-with-sublimetext)
    - [SublimeLinter](#sublimelinter)
    - [Sublime​Linter-contrib-eslint](#sublime%E2%80%8Blinter-contrib-eslint)
- [Formatting your code using ESLint rules](#formatting-your-code-using-eslint-rules)
    - [ESLint-Formatter](#eslint-formatter)
    - [Watch npm script](#watch-npm-script)
- [Example of .eslintrc.js](#example-of-eslintrcjs)
- [Do some reading while you're at it](#do-some-reading-while-youre-at-it)
- [Changelog](#changelog)
    - [Last release: 2.4.0 - 13 July 2017](#last-release-240---13-july-2017)

<!-- /MarkdownTOC -->

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
    "eslint": "^4.2.0",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-json": "^1.2.0",
    "eslint-plugin-no-inferred-method-name": "^1.0.2",
    "eslint-plugin-promise": "^3.5.0",
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

The [`frontend`](https://github.com/codemachiner/eslint-config/blob/master/rules/frontend.js) & [`backend`](https://github.com/codemachiner/eslint-config/blob/master/rules/backend.js) files are just bundles, each loading it's specific rule files.

```text
...
▾ rules/
  ≡ frontend.js
  ≡ backend.js

  ≡ best.practices.js
  ≡ comments.js
  ≡ errors.js
  ≡ es6.js
  ≡ flow.js
  ≡ html.js     <-- not in `backend`
  ≡ import.js
  ≡ jsdoc.js
  ≡ promise.js
  ≡ react.js    <-- not in `frontend`
  ≡ style.js
  ≡ unicorn.js
  ≡ variables.js
  ≡ node.js     <-- not in `frontend`
...
```

## ESLint plugins used

### eslint-plugin-import

[![npm](https://img.shields.io/npm/dm/eslint-plugin-import.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-import)

Support for ES2015+ (ES6+) import/export syntax.  
Can be loaded separately into your .eslintrc's `extends` from [`@codemachiner/eslint-config/rules/import`](https://github.com/codemachiner/eslint-config/blob/master/rules/import.js).

### eslint-plugin-json

[![npm](https://img.shields.io/npm/dm/eslint-plugin-json.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-json)

Lint JSON files.

### eslint-plugin-promise

[![npm](https://img.shields.io/npm/dm/eslint-plugin-promise.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-promise)

Enforce best practices for JavaScript promises.  
Can be loaded separately into your .eslintrc's `extends` from [`@codemachiner/eslint-config/rules/promise`](https://github.com/codemachiner/eslint-config/blob/master/rules/promise.js).

### eslint-plugin-unicorn

[![npm](https://img.shields.io/npm/dm/eslint-plugin-unicorn.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-unicorn)

Various awesome ESLint rules.  
Can be loaded separately into your .eslintrc's `extends` from [`@codemachiner/eslint-config/rules/unicorn`](https://github.com/codemachiner/eslint-config/blob/master/rules/unicorn.js).

### eslint-plugin-flowtype

[![npm](https://img.shields.io/npm/dm/eslint-plugin-flowtype.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-flowtype)

[Flow](https://flow.org/) is a static type checker made by Facebook. It does a lot of work to make you more productive. Making you code faster, smarter, more confidently, and to a bigger scale.

Can be loaded separately into your .eslintrc's `extends` from [`@codemachiner/eslint-config/rules/flow`](https://github.com/codemachiner/eslint-config/blob/master/rules/flow.js).

### eslint-plugin-html

[![npm](https://img.shields.io/npm/dm/eslint-plugin-html.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-html)

Allows linting and fixing inline scripts contained in HTML files.

Can be loaded separately into your .eslintrc's `extends` from [`@codemachiner/eslint-config/rules/html`](https://github.com/codemachiner/eslint-config/blob/master/rules/html.js).

You will need to install it separately since it's not in the `peerDependencies` list.

```bash
npm install eslint-plugin-html --save-dev
```

### eslint-plugin-react

[![npm](https://img.shields.io/npm/dm/eslint-plugin-react.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-react)

React specific linting rules for ESLint.

Can be loaded separately into your .eslintrc's `extends` from [`@codemachiner/eslint-config/rules/react`](https://github.com/codemachiner/eslint-config/blob/master/rules/react.js).

You will need to install it separately since it's not in the `peerDependencies` list.

```bash
npm install eslint-plugin-react --save-dev
```

### eslint-plugin-no-inferred-method-name

[![npm](https://img.shields.io/npm/dm/eslint-plugin-no-inferred-method-name.svg?style=flat-square)](https://www.npmjs.org/package/eslint-plugin-no-inferred-method-name)

In ES6, compact methods and unnamed function expression assignments within object literals do not create a lexical identification (name) binding that corresponds to the function name identifier for recursion or event binding. The compact method syntax will not be an appropriate option for these types of solutions, and a named function expression should be used instead.
This custom ESLint rule will identify instances where a function name is being called and a lexical identifier is unavailable within a compact object literal.

## Using with SublimeText

### SublimeLinter

[![SublimeLinter - Package Control](https://packagecontrol.herokuapp.com/downloads/SublimeLinter.svg?style=flat-square)](https://packagecontrol.io/packages/SublimeLinter)

Sublime Text 3 plugin that provides a framework for linting code. Whatever language you code in, SublimeLinter can help you write cleaner, better, more bug-free code. SublimeLinter has been designed to provide maximum flexibility and usability for users and maximum simplicity for linter authors.

### Sublime​Linter-contrib-eslint

[![SublimeLinter-contrib-eslint - Package Control](https://packagecontrol.herokuapp.com/downloads/SublimeLinter-contrib-eslint.svg?style=flat-square)](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)

Sublime Text 3 plugin for SublimeLinter that provides an interface to ESLint. It will be used with files that have the "javascript" syntax.

**:godmode: TIP 1:** use [`SublimeLinter-contrib-eslint_d`](https://github.com/roadhump/SublimeLinter-contrib-eslint_d) for "as you type lightning fast" linting.

**:godmode: TIP 1.1:** in order to make `eslint-plugin-import` and `.eslintignore` work you need to add `chdir` to your `*.sublime-project` file:

```json
{
    "SublimeLinter": {
        "linters": {
            "eslint_d": {
                "chdir": "${project}"
            }
        }
    }
}
```

Read more here: [fix Sublime integration without workaround](https://github.com/benmosher/eslint-plugin-import/issues/146) and [Relative stdin-filename breaks my plugin](https://github.com/roadhump/SublimeLinter-eslint/issues/58)

## Formatting your code using ESLint rules

### ESLint-Formatter

[![ESLint-Formatter - Package Control](https://packagecontrol.herokuapp.com/downloads/ESLint-Formatter.svg?style=flat-square)](https://packagecontrol.io/packages/ESLint-Formatter)

Sublime Text 3 plugin to auto-format your javascript code according to the ESLint configuration files you already have.

While using the plugin with `eslint` you will notice a delay when formatting. This is because of the node startup time on each lint. You [can configure it](https://github.com/TheSavior/ESLint-Formatter#performance) to use [`eslint_d`](https://github.com/mantoni/eslint_d.js) which starts a server in the background and interfaces `eslint`, making the formatting almost instant (there's still the .

### Watch npm script

## Example of .eslintrc.js

```javascript
module.exports = {
    root  : true,
    parser: "babel-eslint",

    extends: [
        "@codemachiner/eslint-config/rules/frontend",
        "@codemachiner/eslint-config/rules/react",
    ],

    settings: {
        "import/resolver": {
            webpack: {
                config: "./webpack.config.js",
            },
        },

        // Recommended if you use eslint_d
        "import/cache": {
            lifetime: 5,
        },
    },

    rules: {
        // Don"t require .jsx extension when importing
        "import/extensions": [
            "error", "always", {
                js : "never",
                jsx: "never",
            },
        ],
    },
}
```

## Do some reading while you're at it

- [Detect Problems in JavaScript Automatically with ESLint](https://davidwalsh.name/eslint)
- [Elements of JavaScript Style](https://medium.com/javascript-scene/elements-of-javascript-style-caa8821cb99f) - while not related to ESLint, it set's you on the path of structuring and organizing yourself better.
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) - Common mistakes using promises.
- [Stack Overflow: What's the difference between dependencies, devDependencies and peerDependencies in npm package.json file?](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies)
- [An Open Letter to JavaScript Leaders Regarding Semicolons](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)
- [Configuring ESLint](http://eslint.org/docs/user-guide/configuring)

## Changelog

History of all changes in [CHANGELOG.md](https://github.com/codemachiner/eslint-config/blob/master/CHANGELOG.md)

### Last release: 2.4.0 - 13 July 2017

React support

#### Added

- `eslint-plugin-react` with recommended rules in [`/rules/react.js`](https://github.com/codemachiner/eslint-config/blob/master/rules/react.js)
