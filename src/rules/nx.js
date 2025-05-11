import nxPlugin from "@nx/eslint-plugin"

const RULES = {
  // Visibility and publishing rules
  publicCanOnlyImportPublic: {
    sourceTag: "npm:public",
    onlyDependOnLibsWithTags: ["npm:public"],
  },
  privateCanImportAny: {
    sourceTag: "npm:private",
    onlyDependOnLibsWithTags: ["npm:public", "npm:private"],
  },
  // Package type rules
  libsCanOnlyImportLibs: {
    sourceTag: "type:lib",
    onlyDependOnLibsWithTags: ["type:lib"],
  },
  hooksCanOnlyImportLibsAndHooks: {
    sourceTag: "type:hook",
    onlyDependOnLibsWithTags: ["type:lib", "type:hook"],
  },
  uiCanImportAny: {
    sourceTag: "type:ui",
    onlyDependOnLibsWithTags: ["type:ui", "type:lib", "type:hook"],
  },
  appsCanImportAny: {
    sourceTag: "type:app",
    onlyDependOnLibsWithTags: ["type:ui", "type:lib", "type:hook"],
  },
  // Runtime rules
  apiCanOnlyImportApiOrNode: {
    sourceTag: "runtime:api",
    onlyDependOnLibsWithTags: ["runtime:api", "runtime:node"],
  },
  reactCanOnlyImportReactOrNode: {
    sourceTag: "runtime:react",
    onlyDependOnLibsWithTags: ["runtime:react", "runtime:node"],
  },
  nodeCanImportNode: {
    sourceTag: "runtime:node",
    onlyDependOnLibsWithTags: ["runtime:node"],
  },
  // Domain rules
  domainCanOnlyImportSelf: {
    sourceTag: "domain:*",
    onlyDependOnLibsWithTags: ["domain:${tag}"],
  },
  // Prevent imports from test files in non-test files
  noTestImportsInProd: {
    sourceTag: "!test",
    bannedExternalImports: ["**/*.spec.*", "**/*.test.*", "**/test-utils/**"],
  },
}

/** @satisfies {import("eslint").Linter.Config} */
export default /** @type {const} */ ({
  plugins: {
    "@nx": nxPlugin,
  },
  rules: {
    "@nx/enforce-module-boundaries": [
      "error",
      {
        allow: [],
        depConstraints: [
          RULES.publicCanOnlyImportPublic,
          RULES.privateCanImportAny,
          RULES.libsCanOnlyImportLibs,
          RULES.hooksCanOnlyImportLibsAndHooks,
          RULES.uiCanImportAny,
          RULES.appsCanImportAny,
          RULES.apiCanOnlyImportApiOrNode,
          RULES.reactCanOnlyImportReactOrNode,
          RULES.nodeCanImportNode,
          RULES.domainCanOnlyImportSelf,
          RULES.noTestImportsInProd,
        ],
      },
    ],
  },
})
