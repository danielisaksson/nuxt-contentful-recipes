const fs = require('fs')
const path = require('path')
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const contentful = require('contentful')

console.log('Building with Preview settings')

module.exports = {
  hooks: {
    'generate:done': nuxt => {
      fs.copyFileSync(
        'netlify-buildfiles/_redirects-preview',
        path.join(nuxt.options.generate.dir, '_redirects')
      )

      fs.copyFileSync(
        'netlify-buildfiles/_headers-preview',
        path.join(nuxt.options.generate.dir, '_headers')
      )
    }
  },
  srcDir: 'src/',
  css: [
    // SCSS file in the project
    // '@/assets/css/main.scss'
  ],
  generate: {
    dir: 'dist-preview'
  },
  mode: 'spa',
  plugins: ['~/plugins/Contentful', '~/plugins/InstantSearch'],
  /*
   ** Headers of the page
   */
  head: {
    title: 'Coko Cooking',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My favourite recipes'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,700'
      }
    ]
  },
  modules: ['@nuxtjs/markdownit', '@nuxtjs/sitemap'], //'@nuxtjs/pwa',
  markdownit: {
    injected: true
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    // analyze: true,
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    ALGOLIA_APP: process.env.ALGOLIA_APP,
    ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN
  }
}
