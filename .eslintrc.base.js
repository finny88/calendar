module.exports = {
  'env': {
    'browser': true,
  },
  'parser': '@typescript-eslint/parser',
  'extends': [
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // 'off' or 0 - turn the rule off
    // 'warn' or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // 'error' or 2 - turn the rule on as an error (exit code is 1 when triggered)
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/camelcase': 0,
    'react/prop-types': 0,
    'react/no-children-prop': 1,
    'react/display-name': 1,
    'react/jsx-curly-brace-presence': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      { 'components': ['Link'] }
    ],
    eqeqeq: 2,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    // Hooks rules
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'no-nested-ternary': 2,
    'no-console': 2,
    'no-debugger': 2,
    'no-shadow': ['error', { hoist: 'all' }],
    '@typescript-eslint/no-use-before-define': 1,
    'spaced-comment': ['error', 'always', { exceptions: ['-+'] }],
    '@typescript-eslint/prefer-optional-chain': 2,
    'react/jsx-handler-names': [
      'warn',
      {
        eventHandlerPrefix: 'handle|toggle',
        checkInlineFunction: true,
      },
    ],
    'max-lines': ['error', 300],
    'react/jsx-boolean-value': 1,
    'no-duplicate-imports': 2,
    '@typescript-eslint/no-explicit-any': 0,
    'no-implicit-coercion': [
      'error',
      { disallowTemplateShorthand: true, allow: ['!!', '+'] },
    ],
    '@typescript-eslint/consistent-type-imports': 0,
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: "@mui/material",
            importNames: ["makeStyles"],
            message: "Please import 'makeStyles' from 'tss-react/mui' instead."
          },
          {
            name: '@mui/material',
            message: "Please import default from '@mui/material/*' instead."
          },
        ]
      }
    ],
    "no-restricted-syntax": [
      "error",
      {
        "selector": ":matches(ImportNamespaceSpecifier[local.name='React'])",
        "message": "Wildcard import from 'react' is forbidden"
      }
    ]
  }
}
