module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },

  plugins: ["simple-import-sort", "import", "react"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended-legacy",
    "plugin:react-hooks/recommended",
  ],

  rules: {
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
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
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
  },
};