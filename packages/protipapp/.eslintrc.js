module.exports = {
  overrides: [
    {
      files: ['src/**/*.{js,ts,tsx}'],
      extends: ['../../eslint/.eslintrc.web'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.js'],
      extends: ['../../eslint/.eslintrc.node'],
    },
  ],
}
