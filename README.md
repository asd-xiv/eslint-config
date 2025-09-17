[![Release](https://github.com/asd-xiv/eslint-config/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/asd-xiv/eslint-config/actions/workflows/release.yml)
[![npm version](https://img.shields.io/npm/v/@asd14/eslint-config.svg)](https://www.npmjs.com/package/@asd14/eslint-config)

# @asd14/eslint-config

> Reusable ESLint configurations.

<!-- vim-markdown-toc GFM -->

- [Installation](#installation)
  - [Peer dependencies](#peer-dependencies)
- [Usage](#usage)
- [License](#license)

<!-- vim-markdown-toc -->

## Installation

```sh
npm install --save-dev @asd14/ts-config eslint@^9 prettier@^3
```

### Peer dependencies

This package requires and assumes you already installed:

```json
  "peerDependencies": {
    "eslint": "^9",
    "prettier": "^3"
  },
```

## Usage

In your `eslint.config.js`, extend the desired configuration:

```js
import { tsNodeConfig, commonIgnores } from "@asd14/eslint-config/typescript"

const SRC_FILES = ["src/**/*.ts"]
const TEST_FILES = ["src/**/*.test.ts"]
const DEV_FILES = ["eslint.config.js"]

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: commonIgnores
  },
  {
    ...tsNodeConfig,
    files: [...SRC_FILES, ...DEV_FILES, ...TEST_FILES]
  }
]
```

## License

MIT
