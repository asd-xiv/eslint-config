# `@asd14/eslint-config` package decisions

Rules for using this file:

1. Decisions are sorted chronologically, newest at the top
2. Each decision should contain the following:
   - `Title` + `Description`
   - Labeled fields: `Date`, `Problem`, `Solution`
   - Optional: `References`, `Note`
3. Reverting or changing a decision should be documented as a new decision

<!-- vim-markdown-toc GFM -->

- [1. Allow a leading `_` on private names](#1-allow-a-leading-_-on-private-names)

<!-- vim-markdown-toc -->

## 1. Allow a leading `_` on private names

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
