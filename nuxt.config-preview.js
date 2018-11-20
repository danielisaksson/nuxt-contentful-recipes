if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const contentful = require('contentful')
const CopyWebpackPlugin = require('copy-webpack-plugin')

console.log('Building with Preview settings')

module.exports = {
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
    plugins: [
      /*
      ** Copy _headers and _redirects files to the static folder
      ** before they are copied to the dist-preview folder
       */
      new CopyWebpackPlugin([
        {
          from: 'netlify-buildfiles/_redirects-preview',
          to: '../../src/static/_redirects',
          toType: 'file'
        },
        {
          from: 'netlify-buildfiles/_headers-preview',
          to: '../../src/static/_headers',
          toType: 'file'
        }
      ])
    ],
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
