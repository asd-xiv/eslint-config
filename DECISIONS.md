# `@asd14/eslint-config` package decisions

This file holds the decisions whose "why" the code and the other docs do not
show. It is not a todo list, release notes or a session log.

<!-- vim-markdown-toc GFM -->

- [1. Allow a leading `_` on private names, two lint rules rejected them](#1-allow-a-leading-_-on-private-names-two-lint-rules-rejected-them)

<!-- vim-markdown-toc -->

## 1. Allow a leading `_` on private names, two lint rules rejected them

**Date**: 21st of October, 2026

**Problem**:

- A leading `_` marks a private name, eg. `_parseRow`, `_cache`, `_STORAGE_KEY`.
  `no-underscore-dangle` rejects it
- `naming-convention` allows it by default, but rejects it on a boolean and on a
  global `const` primitive

**Solution**:

- Turn off `no-underscore-dangle`
- Allow a leading `_` in the boolean and the global `const` selectors of
  `naming-convention`
