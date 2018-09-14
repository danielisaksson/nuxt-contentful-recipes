const contentful = require('contentful')
const defaultConfig = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: 'cdn.contentful.com'
}

module.exports = {
  createClient(config = defaultConfig) {
    console.log('createClient', config)
    return contentful.createClient({
      space: config.space,
      accessToken: config.accessToken,
      host: config.host
    })
  }
}
