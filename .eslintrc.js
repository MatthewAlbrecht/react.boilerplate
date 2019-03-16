module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'react-app',
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'ignore',
      'exports': 'ignore',
      'functions': 'ignore',
    }],
    'semi': ['error', 'always'],
    'no-console': ['warn'],
    'newline-after-var': ['error'],
    'newline-before-return': ['error'],
    'no-unused-vars': ['error'],
  },
};
