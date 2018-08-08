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
        href: 'https://fonts.googleapis.com/css?family=Actor|GFS+Didot'
        // 'https://fonts.googleapis.com/css?family=Montserrat|Playfair+Display'
      }
    ]
  },
  modules: ['@nuxtjs/markdownit'],
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
  }
}
