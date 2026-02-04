'use strict';

const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jestPlugin = require('eslint-plugin-jest');
const globals = require('globals');

module.exports = [
  { ignores: ['node_modules/', 'coverage/', 'dist/', '*.config.js'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.node, ...jestPlugin.environments.globals.globals },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      jest: jestPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
  {
    files: ['__mocks__/**'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    plugins: { jest: jestPlugin },
    languageOptions: {
      globals: { ...jestPlugin.environments.globals.globals },
    },
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/valid-expect': 'error',
    },
  },
];
