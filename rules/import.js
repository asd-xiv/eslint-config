module.exports = {
    "plugins": [
        "import",
    ],
    "rules": {
        // analysis/correctness
        //
        "import/no-unresolved": [ "error", { "commonjs": true } ],
        "import/named": "error",
        "import/namespace": [ "error", { "allowComputed": false } ],
        "import/default": "error",
        "import/export": "error",

        // warnings
        //
        "import/no-named-as-default": "warn",
        "import/no-named-as-default-member": "warn",
        "import/no-duplicates": "warn",
        "import/unambiguous": "warn",
    },
}
