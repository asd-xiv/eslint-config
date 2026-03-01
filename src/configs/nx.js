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
    sourceTag: "type:library",
    onlyDependOnLibsWithTags: ["type:library"],
  },
  hooksCanOnlyImportLibsAndHooks: {
    sourceTag: "type:hook",
    onlyDependOnLibsWithTags: ["type:library", "type:hook"],
  },
  uiCanImportAny: {
    sourceTag: "type:ui",
    onlyDependOnLibsWithTags: ["type:ui", "type:library", "type:hook"],
  },
  appsCanImportAny: {
    sourceTag: "type:app",
    onlyDependOnLibsWithTags: ["type:ui", "type:library", "type:hook"],
  },
  // Runtime/Target rules
  apiCanOnlyImportApiOrNodeOrAny: {
    sourceTag: "target:api",
    onlyDependOnLibsWithTags: ["target:api", "target:node", "target:any"],
  },
  reactCanOnlyImportReactOrAny: {
    sourceTag: "target:react",
    onlyDependOnLibsWithTags: ["target:react", "target:any"],
  },
  nodeCanImportNodeOrAny: {
    sourceTag: "target:node",
    onlyDependOnLibsWithTags: ["target:node", "target:any"],
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

/**
 * Strict NX module boundary rules for source files.
 *
 * @satisfies {import("eslint").Linter.Config}
 */
const nxConfig = /** @type {const} */ ({
  plugins: {
    "@nx": nxPlugin,
  },
  rules: {
    "@nx/enforce-module-boundaries": [
      "error",
      {
        allow: [
          "^.*/types$", // Allow importing types across boundaries (compile-time only)
          "^.*/const$", // Allow importing constants across boundaries (pure data)
        ],
        depConstraints: [
          RULES.publicCanOnlyImportPublic,
          RULES.privateCanImportAny,
          RULES.libsCanOnlyImportLibs,
          RULES.hooksCanOnlyImportLibsAndHooks,
          RULES.uiCanImportAny,
          RULES.appsCanImportAny,
          RULES.apiCanOnlyImportApiOrNodeOrAny,
          RULES.reactCanOnlyImportReactOrAny,
          RULES.nodeCanImportNodeOrAny,
          RULES.domainCanOnlyImportSelf,
          RULES.noTestImportsInProd,
        ],
      },
    ],
  },
})

/**
 * Relaxed NX module boundary rules for dev files (tests, configs, stories).
 * Dev files dont need strict visibility/runtime/domain enforcement since
 * they are not emited in the final bundle.
 *
 * @satisfies {import("eslint").Linter.Config}
 */
const nxDevConfig = /** @type {const} */ ({
  plugins: {
    "@nx": nxPlugin,
  },
  rules: {
    "@nx/enforce-module-boundaries": [
      "error",
      {
        allow: [],
        depConstraints: [
          {
            sourceTag: "*",
            onlyDependOnLibsWithTags: ["type:library"],
          },
        ],
      },
    ],
  },
})

export { nxConfig, nxDevConfig }
