# JavaScript ESLint rules

Mostly based on the Airbnb styles but got changed along the way with what we like.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `cm-eslint-rules`:

```
$ npm install cm-eslint-rules --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `cm-eslint-rules` globally.

## Usage

Add `cm-eslint-rules` to the extends section of your `.eslintrc` configuration file:

```json
{
    "extends": [
        "cm-eslint-rules"
    ]
}
```

Uses [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn), [eslint-plugin-no-inferred-method-name](https://github.com/johnstonbl01/eslint-no-inferred-method-name) and [eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json)
