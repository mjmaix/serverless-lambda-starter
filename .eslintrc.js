module.exports = {
  extends: [
    "airbnb-base",
    "plugin:jest/all",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", // eslint-config-prettier - must be on last to override other configs
  ],
  plugins: ["import", "jest", "@typescript-eslint"],
  root: true,
  globals: {},
  rules: {
    "import/no-unresolved": [
      2,
      {
        commonjs: true,
        amd: true,
        ignore: [
          "serverless/aws", // using only as types
        ],
      },
    ],
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      {
        code: 150,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
        groups: ["builtin", "external", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "@queries/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@src/**",
            group: "internal",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
  },
  parser: "@typescript-eslint/parser",
  env: {},
  overrides: [],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@src", "./src"],
          ["@tests", "./tests"],
          ["@queries", "./queries"],
        ],
        extensions: [".ts", ".js"],
      },
    },
  },
};
