const contentful = require('contentful')
const defaultConfig = {
  CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
}

module.exports = {
  createClient(config = defaultConfig) {
    return contentful.createClient({
      space: config.CONTENTFUL_SPACE_ID,
      accessToken: config.CONTENTFUL_ACCESS_TOKEN
    })
  }
}
