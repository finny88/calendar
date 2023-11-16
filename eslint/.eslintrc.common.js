module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['import'],
  rules: {
    // 'off' or 0 - turn the rule off
    // 'warn' or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // 'error' or 2 - turn the rule on as an error (exit code is 1 when triggered)
    eqeqeq: 2,
    'no-nested-ternary': 2,
    'no-console': 2,
    'no-debugger': 2,
    'no-shadow': ['error', { hoist: 'all' }],
    'spaced-comment': ['error', 'always', { exceptions: ['-+'] }],
    'max-lines': ['error', 300],
    'no-implicit-coercion': [
      'error',
      { disallowTemplateShorthand: true, allow: ['!!', '+'] },
    ],
    // Prettier as warnings
    'prettier/prettier': 1,
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'templates/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-duplicates': 2,
  },
}
