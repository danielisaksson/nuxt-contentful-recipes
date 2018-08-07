module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // Use Prettier and JavaScript Standard Style as ESLint rules https://www.npmjs.com/package/eslint-config-prettier-standard
    'plugin:vue/essential',
    'plugin:prettier/recommended'
    //'prettier-standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    "prettier/prettier": "error"
  }
}
