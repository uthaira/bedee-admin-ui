module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['react', 'react-hooks', 'jest'],
  extends: [
    'eslint:recommended',
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
  },
  ignorePatterns: [],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': ['off', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 0,
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-is-mounted': 'error',
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
      },
    ],
    // Import rules
    'no-duplicate-imports': 'off',
    'import/prefer-default-export': 0,
    'import/first': 'error',

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': [
      'error',
      {
        count: 1,
      },
    ],
    'import/no-cycle': 'error',
    'import/no-deprecated': 'error',
    'max-len': ['error', { code: 180, ignoreUrls: true }],
    semi: 0,
    'indent': ['error', 2]
  },
}
