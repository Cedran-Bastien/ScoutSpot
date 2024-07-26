import typescriptEslint from "@typescript-eslint/eslint-plugin";
import onlyWarn from "eslint-plugin-only-warn";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/.*.js",
        "**/node_modules/",
        "**/dist/",
        "**/babel.config.js",
        "**/metro.config.js",
    ],
}, ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        "only-warn": onlyWarn,
    },
    languageOptions: {
        globals: {
            ...globals.node,
            React: true,
            JSX: true,
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "commonjs",

        parserOptions: {
            project: true,
        },
    },

    settings: {
        "import/resolver": {
            typescript: {
                project: "/home/cedran/Documents/Private/Professional/Power_IT/mobile-app/tsconfig.json",
            },
        },
    },

    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
    },
}, {
    files: ["**/*.js?(x)", "**/*.ts?(x)"],
}];