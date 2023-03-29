module.exports = {
  env: { node: true },
  rules: {
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: 'useAsyncEffect',
      },
    ],
  },
};
