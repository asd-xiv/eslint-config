[![Release](https://github.com/asd-xiv/eslint-config/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/asd-xiv/eslint-config/actions/workflows/release.yml)
[![npm version](https://img.shields.io/npm/v/@asd14/eslint-config.svg)](https://www.npmjs.com/package/@asd14/eslint-config)

# @asd14/eslint-config

> ASD14's reusable ESLint configurations.

<!-- vim-markdown-toc GFM -->

- [Installation](#installation)
- [Exports](#exports)
- [Usage](#usage)
  - [With NX](#with-nx)
- [License](#license)

<!-- vim-markdown-toc -->

## Installation

```sh
npm install --save-dev @asd14/eslint-config eslint@^9 prettier@^3 typescript@^5
```

> NOTE: `eslint`, `prettier` and `typescript` are peerDependencies

## Exports

| Entrypoint                   | Description                                           |
| ---------------------------- | ----------------------------------------------------- |
| `@asd14/eslint-config/node`  | Node.js source files config                           |
| `@asd14/eslint-config/react` | TypeScript + React source files combo config          |
| `@asd14/eslint-config/ts`    | TypeScript + Node.js source files combo config        |
| `@asd14/eslint-config/nx`    | NX module boundary configs (strict + relaxed for dev) |

All environment configs re-export `commonIgnores` array and `devConfig` for
convenience.

## Usage

```js
import { tsConfig, commonIgnores, devConfig } from "@asd14/eslint-config/ts"

const SRC_FILES = ["src/**/*.ts"]
const TEST_FILES = ["src/**/*.test.ts"]
const DEV_FILES = ["eslint.config.js"]

/** @type {import("eslint").Linter.Config[]} */
export default [
  { ignores: [...commonIgnores] },
  {
    ...tsConfig,
    files: [...SRC_FILES]
  },
  {
    ...tsConfig,
    ...devConfig,
    files: [...TEST_FILES, ...DEV_FILES],
    rules: { ...tsConfig.rules, ...devConfig.rules }
  }
]
```

### With NX

Compose the NX boundary configs into your source and dev entries.

```js
import { tsConfig, commonIgnores, devConfig } from "@asd14/eslint-config/ts"
import { nxConfig, nxDevConfig } from "@asd14/eslint-config/nx"

const SRC_FILES = ["src/**/*.ts"]
const TEST_FILES = ["src/**/*.test.ts"]
const DEV_FILES = ["eslint.config.js"]

/** @type {import("eslint").Linter.Config[]} */
export default [
  { ignores: commonIgnores },
  {
    ...tsConfig,
    files: [...SRC_FILES],
    plugins: { ...tsConfig.plugins, ...nxConfig.plugins },
    rules: { ...tsConfig.rules, ...nxConfig.rules }
  },
  {
    ...tsConfig,
    ...devConfig,
    files: [...TEST_FILES, ...DEV_FILES],
    plugins: { ...tsConfig.plugins, ...nxDevConfig.plugins },
    rules: {
      ...tsConfig.rules,
      ...devConfig.rules,
      ...nxDevConfig.rules
    }
  }
]
```

## License

MIT
