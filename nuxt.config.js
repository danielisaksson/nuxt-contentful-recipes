require('dotenv').config()
const contentful = require('contentful')

module.exports = {
  srcDir: 'src/',
  css: [
    // SCSS file in the project
    // '@/assets/css/main.scss'
  ],
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
        // 'https://fonts.googleapis.com/css?family=Montserrat|Playfair+Display'
        // Playfair+Display:400,700
        // Actor|GFS+Didot
      }
    ]
  },
  modules: ['@nuxtjs/markdownit', '@nuxtjs/sitemap'], //'@nuxtjs/pwa',
  markdownit: {
    injected: true
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://recept.coko.se',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true // Enable me when using nuxt generate
    // routes: [
    //   '/page/1',
    //   {
    //     url: '/page/2',
    //     changefreq: 'daily',
    //     priority: 1,
    //     lastmodISO: '2017-06-30T13:30:00.000Z'
    //   }
    // ]
  },
  workbox: {
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
  generate: {
    routes: function() {
      const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      })

      return client
        .getEntries({
          content_type: 'recipe',
          select: 'fields'
        })
        .then(result => {
          return result.items.map(({ fields }) => {
            return `/${fields.slug}`
          })
        })
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
