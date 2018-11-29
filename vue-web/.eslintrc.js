module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:vue/essential',
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: [
    'vue',
  ],
  rules: {
    "prettier/prettier": [
      'error',
      {
        semi: true,
        singleQuote: true,
        bracketSpacing: false,
        tabWidth: 2,
        printWidth: 120

      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  globals: {
    gGlobal: true,
    md5: true,
    qq: true

  }
};
