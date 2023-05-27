module.exports = {
  '*.{ts,tsx}': [() => 'tsc --noEmit', 'eslint --fix'],
};
