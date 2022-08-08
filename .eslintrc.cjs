module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended'
  ],
  plugins: [
    'svelte3'
  ],
  ignorePatterns: [
    'public/build/',
    'dist/'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    // semi: ['error', 'never'] // uncomment if you want to remove ;
  },
  settings: {
    // ...
  }
}