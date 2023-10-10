module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "eslint:recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next",
        "@typescript-eslint"
        
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "semi": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/semi": "off",
        // "react/jsx-indent": [2, 4],
        "indent": ['error', 4],
        "no-unused-vars": "warn",
        "i18next/no-literal-string": ['warn', {onlyAttribute: ['']}]
    },
    "globals": {
        IS_DEV: true
    }
}
