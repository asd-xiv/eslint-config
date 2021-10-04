# Coding Style

All teams work differently, a _team's style_ should represent the deliberation
and negotiation of each coding aspect by the members of that team.

- These are not immutable rules, things change, evolve and serve different
purposes in different stages of development and experience.
- All conventions are right as long as people using them agree on their meaning
and form.
- If there's a linting rule that can verify or enforce a conventions, use it.

The following is based on:

- [Elements of JavaScript Style](https://medium.com/javascript-scene/elements-of-javascript-style-caa8821cb99f)
- [add others]

and our own experience.

## Folder structure and imports

The principle of ["One Way Data
Flow"](https://tkssharma.gitbook.io/react-training/day-01/react-js-3-principles/one-way-data-flow)
can also be applied to component imports/dependencies.

- The project folder structure should resemble more a
  [Polytree](https://en.wikipedia.org/wiki/Polytree), not the required
  [Directed acyclic
  graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph)

- Use [Hierarchical
  model–view–controller](https://en.wikipedia.org/wiki/Hierarchical_model%E2%80%93view%E2%80%93controller)
  when creating pages, containers or multi part entities

  ```js
  // MVC
  {
    "models": [
      "entity1.model", "entity2.model"
    ],
    "views": [
      "entity1.view", "entity2.view"
    ],
    "controllers": [
      "entity1.ctrl", "entity2.ctrl"
    ]
  }

  // HMVC
  {
    "entity1": [
      "model", "view", "ctrl"
    ],
    "entity2": [
      "model", "view", "ctrl"
    ]
  }
  ```

- A child should never import something from it's parents or it's siblings, _it
  can only have access to it's children_

- If a child needs something from it's parent, that piece of data should be
  _handed down through props_ (data, functions or other Components)

## Naming

### Functions

A functions is a thing that does something, performs an action, if it does
something, **it's a verb**. The stronger and less noise around the verb, the
better. `renameFile` better than `fileRename` or `doRenameFile`.

Functions start with a **verb**, optionally followed by the **noun** and/or a
**adjective**:

```js
const rename = () => { ... }
const renameFile = () => { ... }
const renameMarkdownFiles = () => { ... }
```

All functions ever written are a specialized form of one of the following
verbs:

- `Create`: "build", "initialize", "construct"
- `Read`: "find", "get", "check"
- `Update`: "change", "rename", "map", "filter"
- `Delete`: "remove"

Use the verb in it's basic form
([infinitive](https://en.wikipedia.org/wiki/Infinitive)). `rename`, not
`renaming` or `doRename` or `renames`.

Use a name intentionally and strengthen it's meaning by constantly implementing
it with the same behavior, for ex:

- `findTodo` throws if not found, `getTodo` returns null
- `updateComment` implies persistence (API or DB interaction),
  `changeCommentText` refers to local state changes
- `sum` adds items of an array, `sumBy` adds the field of an object array by
  providing an "extract" function

Prefix **predicate** functions, functions that return a boolean, with a verbs
that imply truth seeking - `check`, `verify`, `decide`, `determine` - followed
by a question:

```js
const isToday = checkIsToday(new Date())
```

### Booleans

Boolean variables, including React props, are prefixed with one of the following: `can`, `should`, `is`, `has`, `was`

```js
const isAllowed = false
const shouldRender = true
```

### Constants

Always `UPPER_CASE`.

```js
const LANGUAGES = ["EN-us", "NL-nl", "NL-be"]
```

### Handlers and Props

Function `props` are prefixed with **`on`** and phrased as an event:

> `onInputChange`, `onFormSubmit` etc.

Functions passed as props for reacting to an event are prefixed with
**`handle`**, followed by the main **verb**, optionally can use a **noun**
and/or a **adjective**:

> `handleUpdateUser`, `handleSwitchTab`, `handleDisableWorkshopUser` etc.

Example: Persist Users' language preference

```jsx
const handleUpdateUserLocale = useCallback(
  input => update({ locale: input }),
  [update]
)

...

<Sidebar onLocaleChange={handleUpdateUserLocale} />
```

### Typescript types

Append `Type` to the name of the thing it's typing and CamelCase it.

```jsx
type InputUIPropsType = {
  type: "password";
  value: string;
  hasShowUnmasked: boolean;
} | {
  type: "text";
  value: string;
}
```

Separate types from the "actual" code.

```tsx
// separate
const InputUI: FC<InputUIPropsType> = ({ value, type, hasShowUnmasked }) => {
...
}

// inlined, harder to distinguish actionable code from compiler oriented code
const InputUI = (
  props:
    | {
        type: 'password';
        value: string;
        hasShowUnmasked: boolean;
      }
    | {
        type: 'text';
        value: string;
      }
) => {
...
};
```

## Generic names

1. `input`, `item` and `accumulator`

    ```js
    const sum = (input = []) => input.reduce(
      (accumulator, item) => accumulator + item,
      0
    )
    ```

1. `needle`, `heystack` and `index`

    ```js
    const checkExistsWithValue = needle => (heystack = []) => {
      for (let index = 0; index < heystack.length; index++) {
        if (item === heystack[index]) {
          return true
        } 
      }

      return false
    }
    ```

1. When using "functional primitives" like `map` or `reduce`, use `item`,
   `array` and `accumulator`

    ```js
    ```

1. When writing CRUD like functions, use `id` and `data`

    ```js
    const handleCreateTodo = useCallback(
      data => POST("/todos", { body: data }), 
      []
    )

    const handleUpdateTodo = useCallback(
      (id, data) => PATCH(`/todos/${id}`, { body: data }), 
      []
    )
    ```

1. `properties` and `options`, not `args` or `opts` or `props`. Aligns with
   React ecosystem, use it also when writing other functions that require
   _configuring_

    ```js
    ```
