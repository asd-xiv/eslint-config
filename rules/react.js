/* eslint-env node */

module.exports = {
    plugins: [
        "react",
        "jsx-control-statements",
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },

    env: {
        "jsx-control-statements/jsx-control-statements": true,
    },

    rules: {
        // Prevent missing displayName in a React component definition
        "react/display-name": "error",

        // Detect missing key prop
        "react/jsx-key": "error",

        // Prevent comments from being inserted as text nodes
        "react/jsx-no-comment-textnodes": "error",

        // Prevent duplicate properties in JSX
        "react/jsx-no-duplicate-props": "error",

        // Prevent usage of unsafe target='_blank'
        "react/jsx-no-target-blank": "error",

        // Disallow undeclared variables in JSX
        "react/jsx-no-undef": [ "error", { allowGlobals: true } ],

        // Prevent React to be incorrectly marked as unused
        "react/jsx-uses-react": "error",

        // Prevent variables used in JSX to be incorrectly marked as unused
        "react/jsx-uses-vars": "error",

        // When using a boolean attribute in JSX, you can set the attribute
        // value to true or omit the value. This rule will enforce one or the
        // other to keep consistency in your code.
        "react/jsx-boolean-value": [ "error", "always" ],

        // Prevent passing of children as props
        "react/no-children-prop": "error",

        // Prevent problem with children and props.dangerouslySetInnerHTML
        "react/no-danger-with-children": "error",

        // Prevent usage of deprecated methods
        "react/no-deprecated": "error",

        // Prevent direct mutation of this.state
        "react/no-direct-mutation-state": "error",

        // Prevent usage of findDOMNode
        "react/no-find-dom-node": "error",

        // Prevent usage of isMounted
        "react/no-is-mounted": "error",

        // Prevent usage of the return value of React.render
        "react/no-render-return-value": "error",

        // Prevent using string references
        "react/no-string-refs": "error",

        // Prevent invalid characters from appearing in markup
        "react/no-unescaped-entities": "error",

        // Prevent invalid characters from appearing in markup
        "react/no-unknown-property": "error",

        // Prevent missing props validation in a React component definition
        "react/prop-types": "error",

        // Prevent missing React when using JSX
        "react/react-in-jsx-scope": "error",

        // Enforce ES5 or ES6 class for returning value in render function
        "react/require-render-return": "error",

        // Enforce React components to have a shouldComponentUpdate method
        "react/require-optimization": "off",

        // Enforces consistent naming for boolean props
        "react/boolean-prop-naming": [
            "error", {
                rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
            },
        ],

        // Ensure no casing typos were made declaring static class properties
        // and lifecycle methods.
        "react/no-typos": "error",

        /*
         * Choose tag is empty or does not have at least one When
         * tag as child.
         */
        "jsx-control-statements/jsx-choose-not-empty": "error",

        /*
         * Warn if For tag is missing each attribute. And also marks the
         * variable as defined.
         */
        "jsx-control-statements/jsx-for-require-each": "error",

        /*
         * Warn if For tag is missing of attribute.
         */
        "jsx-control-statements/jsx-for-require-of": "error",

        /*
         * Warn if If tag is missing condition attribute.
         */
        "jsx-control-statements/jsx-if-require-condition": "error",

        /*
         * Warn when Otherwise tag is used more than once inside Choose and is
         * not last child.
         */
        "jsx-control-statements/jsx-otherwise-once-last": "error",

        /*
         * Use If tag instead of ternary operator.
         */
        "jsx-control-statements/jsx-use-if-tag": "error",

        /*
         * Warn if When tag is missing condition attribute.
         */
        "jsx-control-statements/jsx-when-require-condition": "error",

        /*
         * This rule is the same as the generic eslint no-undef rule
         * (see http://eslint.org/docs/rules/no-undef) except with an
         * exception built in for variables that are implicitly declared by
         * <For> and <With> statements. Note that this includes no-undef's
         * code and completely replaces it rather than supplementing it - if
         * this rule is on, no-undef should be off. It is compatible with
         * no-undef's options and global declarations.
         */
        "jsx-control-statements/jsx-jcs-no-undef": "error",

        "no-undef": "off",
    },
}
