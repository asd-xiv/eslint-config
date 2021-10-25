<!-- markdownlint-disable first-line-h1 line-length -->

[![Coverage Status](https://coveralls.io/repos/github/andreidmt/tpl-node/badge.svg)](https://coveralls.io/github/andreidmt/tpl-node)

# Node.js library starter template

> ~framework~ **library stack**  
> _noun_
>
> Set of libraries or services configured and composed together with the
> purpose of automating common development practices: __compiling__,
> __linting__, __testing__, __benchmarking__ and __releasing__.

<details>
  <summary>Read more ></summary>
  
  > While similar to a
  > [Framework](https://en.wikipedia.org/wiki/Software_framework), providing an
  > opinionated way of handling certain topics, it intentionally leaves visible the
  > containing libraries details - configuration file, npm scripts, commit hooks
  > etc.  
  >
  > The approach gives developers the freedom of configuration and choice over
  > their application core libraries, focusing on __zero lock-in__ and
  > __experimentation__ with other libraries and workflows.
</details>

## Table of contents

<!-- vim-markdown-toc GFM -->

* [Compile](#compile)
  * [Fresh build](#fresh-build)
  * [Fast incremental builds](#fast-incremental-builds)
* [Lint](#lint)
  * [Scripts](#scripts)
* [Test](#test)
  * [Services](#services)
  * [Scripts](#scripts-1)
* [Benchmark](#benchmark)
  * [Scripts](#scripts-2)
* [Release](#release)
  * [Services](#services-1)
* [How to use](#how-to-use)

<!-- vim-markdown-toc -->

## Compile

1. [**typescript**](https://github.com/microsoft/TypeScript) - A superset of JavaScript that compiles to clean JavaScript output.
    - related files: [`.tsconfig.json`](.tsconfig.json)

### Fresh build

Compile TypeScript files inside `src` folder into `dist`.

```bash
# "prebuild.fresh": "rm -rf ./dist",
# "build.fresh": "tsc",
npm run build.fresh
```

### Fast incremental builds

Useful for supporting other scripts that would otherwise require `ts-node` or
`-r @babel/register`.

```bash
# "build": "tsc --build --incremental",
npm run build
```

[`--build`](https://www.typescriptlang.org/docs/handbook/compiler-options.html) - Build one or more projects and their dependencies, if out of date  
[`--incremental`](https://www.typescriptlang.org/tsconfig/#incremental) - Save `.tsbuildinfo` files to allow for incremental compilation of projects

## Lint

- [eslint](https://github.com/eslint/eslint) - Find and fix problems in your JavaScript code.
- [prettier](https://github.com/prettier/prettier) - Opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
- [markdownlint](https://github.com/igorshubovych/markdownlint-cli) - A Node.js style checker and lint tool for Markdown/CommonMark files.
- [commitlint](https://github.com/conventional-changelog/commitlint) - commitlint checks if your commit messages meet the [conventional commit format](https://www.conventionalcommits.org).
- [lint-staged](https://github.com/okonet/lint-staged) - Run linters against staged git files and don't let :hankey: slip into your codebase!

### Scripts

## Test

- [tape](https://github.com/substack/tape) - [TAP](https://en.wikipedia.org/wiki/Test_Anything_Protocol) producing test harness for node and browsers.
- [tap-nirvana](https://github.com/inadarei/tap-nirvana) - A TAP reporter optimized for developer comfort above anything else.
- [nyc](https://github.com/istanbuljs/nyc) - Wrap JavaScript code with line counters, so that you can track how well your unit-tests exercise your codebase.

### Services

- [Coveralls](https://coveralls.io/) - Test coverage reporting.

### Scripts

- Run all test files inside `src` folder

```bash
# "pretest": "npm run build",
# "test": "tape 'dist/**/*.test.js' | tap-nirvana",
npm run test
```

- Run `test` npm script every time a file changes in `src`

```bash
# "tdd": "nodemon --watch src --exec 'npm test'",
npm run tdd
```

## Benchmark

[benchmark suite code (left) and output](docs/screenshot-benchmark.png)

- [benny](https://github.com/caderek/benny) - A dead simple benchmarking framework for JS/TS libs

### Scripts

- Run all benchmark files inside `src` folder

```bash
# "prebenchmark": "npm run build && rm -rf ./benchmark",
# "benchmark": "node dist/**/*.bench.js",
npm run benchmark
```

## Release

- [semantic-release](https://github.com/semantic-release/semantic-release)

### Services

- [CircleCI](https://circleci.com) - Continuous integration platform.

## How to use
