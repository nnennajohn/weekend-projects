module.exports = {
  root: true,
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
  ],
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        tabWidth: 2,
        bracketSpacing: true,
        trailingComma: 'es5',
        singleQuote: true,
        jsxBracketSameLine: false,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        arrow: false,
      },
    ],
    'react/no-danger': 0,
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0,
    'react/require-default-props': 0,
    'react/prop-types': 0,
    'no-undef': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/forbid-prop-types': 0,
  },
};
