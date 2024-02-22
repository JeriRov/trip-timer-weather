const ERROR = 2;
const OFF = 0;
const WARN = 1;

const REACT_RULES = {
  "react/react-in-jsx-scope": OFF,
  "react/jsx-props-no-spreading": OFF,
  "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
  "react/no-children-prop": ERROR,
  "react/no-deprecated": ERROR,
  "react/no-multi-comp": ERROR,
  "react/no-string-refs": ERROR,
  "react/no-unescaped-entities": ERROR,
  "react/no-unstable-nested-components": ERROR,
  "react/self-closing-comp": ERROR,
  "react/jsx-boolean-value": [ERROR, "always"],
  "react/jsx-fragments": ERROR,
  "react/jsx-handler-names": [
    ERROR,
    {
      checkInlineFunction: true,
      checkLocalVariables: true,
    },
  ],
  "react/jsx-key": ERROR,
  "react/jsx-no-leaked-render": ERROR,
  "react/jsx-no-useless-fragment": ERROR,
  "react/jsx-sort-props": ERROR,
};

const IMPORT_RULES = {
  "import/prefer-default-export": OFF,
  "import/export": OFF,
  "import/no-default-export": ERROR,
  "import/newline-after-import": [ERROR, { count: WARN }],
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
    },
  ],
  "import/order": [
    ERROR,
    {
      groups: [
        "builtin",
        "external",
        "parent",
        "sibling",
        "internal",
        "index",
        "object",
      ],
      pathGroups: [
        {
          pattern: "{components/**,components/**}",
          group: "parent",
          position: "before",
        },
        {
          pattern: "{pages/**,modules}",
          group: "parent",
          position: "before",
        },
        {
          pattern: "{assets/**,constants/**}",
          group: "parent",
          position: "before",
        },
        {
          pattern: "{helpers/**, utils/**}",
          group: "parent",
          position: "before",
        },
        {
          pattern: "{hooks/**}",
          group: "parent",
          position: "before",
        },
        {
          pattern:
            "{**/*.types,**/types,./*.types,./types,**/*.settings,**/settings,./*.settings,./settings,**/*.styles,**/styles,./*.styles,./styles}",
          group: "index",
          position: "before",
        },
      ],
      pathGroupsExcludedImportTypes: ["react"],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
        caseInsensitive: false,
      },
    },
  ],
};

const ESLINT_RULES = {
  "prettier/prettier": ERROR,
  "newline-after-var": ERROR,
  "object-shorthand": ERROR,
};

const TYPESCRIPT_RULES = {
  "@typescript-eslint/no-magic-numbers": [
    ERROR,
    {
      ignoreEnums: true,
      ignoreArrayIndexes: true,
      ignore: [1, 0, -1],
    },
  ],
  "@typescript-eslint/explicit-module-boundary-types": OFF,
  "no-shadow": OFF,
  "@typescript-eslint/no-shadow": WARN,
  "@typescript-eslint/no-unused-vars": [
    ERROR,
    {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
    },
  ],
  "@typescript-eslint/no-var-requires": OFF,
  "@typescript-eslint/no-explicit-any": [ERROR],
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:sonarjs/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "react",
    "react-hooks",
    "sonarjs",
    "prettier",
  ],
  rules: {
    ...REACT_RULES,
    ...IMPORT_RULES,
    ...ESLINT_RULES,
    ...TYPESCRIPT_RULES,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
