# Project setup

## Start project

```zsh
vue init nuxt-community/starter-template nuxt-contentful-recipes
```

## Install Prettier and ES-Lint support

```zsh
npm install --save-dev babel-eslint eslint eslint-config-prettier eslint-loader eslint-plugin-vue eslint-plugin-prettier prettier
```

## Install SASS

```zsh
npm install --save-dev node-sass sass-loader
```

## Add Prettier config in package.json

```json
"prettier": {
    "singleQuote": true,
    "semi": false
  }
```

## Add lint fix in scripts section of package.json

```json
"lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
"lintfix": "eslint --fix --ext .js,.vue --ignore-path .gitignore .",
"precommit": "npm run lint"
```

## Add Prettier rules to .eslintrc.js

Use Prettier and JavaScript Standard Style as ESLint rules  [eslint-config-prettier-standard](https://www.npmjs.com/package/eslint-config-prettier-standard)

```javascript
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
    'plugin:vue/essential',
    'plugin:prettier/recommended'
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
```

## Add Contentful

```zsh
npm install --save contentful
```

## Add Vuex

```zsh
npm install --save vuex
```

## Add Nuxt PWA module

[https://pwa.nuxtjs.org/](https://pwa.nuxtjs.org/)

## Add Nuxt Sitemap XML module

[https://www.npmjs.com/package/@nuxtjs/sitemap](https://www.npmjs.com/package/@nuxtjs/sitemap)
