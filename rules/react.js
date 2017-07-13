/* eslint-env node */

module.exports = {
    plugins: [ "react" ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
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
        "react/jsx-no-undef": "error",

        // Prevent React to be incorrectly marked as unused
        "react/jsx-uses-react": "error",

        // Prevent variables used in JSX to be incorrectly marked as unused
        "react/jsx-uses-vars": "error",

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
        "react/require-optimization": [
            "error", {
                allowDecorators: [ "customDecorators" ],
            },
        ],

        // Enforces consistent naming for boolean props
        // "react/boolean-prop-naming": [
        //     "error", {
        //         rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
        //     },
        // ],
    },
}
