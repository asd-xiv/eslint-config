[![Release](https://github.com/asd-xiv/eslint-config/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/asd-xiv/eslint-config/actions/workflows/release.yml)
[![npm version](https://img.shields.io/npm/v/@asd14/eslint-config.svg)](https://www.npmjs.com/package/@asd14/eslint-config)

# @asd14/eslint-config

> ASD14's reusable ESLint configurations.

<!-- vim-markdown-toc GFM -->

* [Installation](#installation)
* [Usage](#usage)
* [Peer dependencies](#peer-dependencies)
* [License](#license)

<!-- vim-markdown-toc -->

## Installation

```sh
npm install --save-dev @asd14/ts-config eslint@^9 prettier@^3
```

## Usage

In your `eslint.config.js`, extend the desired configuration:

```json
{
  "extends": "@asd14/ts-config/targets/react.json"
}
```

## Peer dependencies

This package requires and assumes you already installed:

```json
  "peerDependencies": {
    "eslint": "^9",
    "prettier": "^3"
  },
```

## License

MIT
