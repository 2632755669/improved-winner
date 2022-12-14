module.exports = {
  root: true,
  extends: '@block/eslint-config/typescript',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/require-default-props': 'off',
    'no-restricted-syntax': 'off',
    'react/destructuring-assignment': 'off',
  },
};

