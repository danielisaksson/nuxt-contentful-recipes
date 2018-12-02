const contentful = require('contentful')
const defaultConfig = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

module.exports = {
  createClient(config = defaultConfig) {
    return contentful.createClient({
      space: config.space,
      accessToken: config.accessToken,
      host: config.host
    })
  }
}
