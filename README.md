# Repo init

**Source: [Setting up React Navite: Expo + Typescript + Eslint (Airbnb) + Prettier (github.com)](https://gist.github.com/yovany-lg/104ed47e74d1ba64f68d79a3e5f76e91)**

**Run the following commands respectively:**

* `yarn add -g expo-cli`
* `yarn create expo --template`
* `npx install-peerdeps --dev eslint-config-airbnb`
* `yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin`
* `yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`

**Create/Edit the file .eslintrc with the following content:**

```json
{
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "ignorePatterns": ["*.config.[jt]s"],
  "plugins": ["@typescript-eslint", "react", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-use-before-define": "off",
    "eqeqeq": "off",
    "global-require": "off",
    "import/extensions": ["error", "never"],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".ts", ".tsx", ".js", ".jsx"]
      }
    ],
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-danger": "off",
    "react/no-unescaped-entities": "off",
    "react/no-unstable-nested-components": "off",
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off"
  }
}
```
