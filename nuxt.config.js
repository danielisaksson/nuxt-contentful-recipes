import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
import * as contentful from 'contentful'
dotenv.config()

/* const fs = require('fs')
const path = require('path')
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const contentful = require('contentful')
 */
console.log('Building with Live settings')

module.exports = {
  target: 'static',
  srcDir: 'src/',
  css: [
    // SCSS file in the project
    // '@/assets/css/main.scss'
  ],
  plugins: [
    '~/plugins/Contentful',
    '~/plugins/InstantSearch',
    { src: '~/plugins/vue-masonry', ssr: false }
  ],
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
        href:
          'https://fonts.googleapis.com/css?family=Playfair+Display|Zilla+Slab:300,400,700|Noto+Serif|Zilla+Slab+Highlight'
      }
    ]
  },
  modules: ['@nuxtjs/markdownit', '@nuxtjs/sitemap'], //'@nuxtjs/pwa',
  markdownit: {
    injected: true
  },
  router: {
    extendRoutes(routes, resolve) {
      const searchRouteIndex = routes.findIndex(({ name }) => {
        return name === 'search'
      })

      routes[searchRouteIndex].props = ({ query }) => {
        return { query: query.q }
      }
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://recept.coko.se',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    exclude: ['/styleguide', '/search']
  },
  /* workbox: {
    runtimeCaching: [
      {
        // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
        urlPattern: 'https://fonts.(?:googleapis|gstatic).com/(.*)',
        // Defaults to `networkFirst` if omitted
        handler: 'cacheFirst',
        strategyOptions: {
          cacheName: 'google-fonts',
          cacheExpiration: {
            maxEntries: 30
          }
        }
      }
    ]
  }, */
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
  generate: {
    routes: async function() {
      const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      })
      const recipes = await client.getEntries({
        content_type: process.env.CONTENTFUL_RECIPE_TYPE,
        select: 'fields'
      })

      const recipesRoutes = recipes.items.map(({ sys, fields }) => {
        return {
          route: `/${fields.slug}`,
          payload: { id: sys.id, ...fields }
        }
      })
      return recipesRoutes
    }
  },
  env: {
    ALGOLIA_APP: process.env.ALGOLIA_APP,
    ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_HOST: process.env.CONTENTFUL_HOST,
    CONTENTFUL_RECIPE_TYPE: process.env.CONTENTFUL_RECIPE_TYPE
  }
}
