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
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "warn",
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        tsx: "never",
        ts: "never",
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
