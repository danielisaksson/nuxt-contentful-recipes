const contentful = require('contentful')
const algoliasearch = require('algoliasearch')
require('dotenv').config()

exports.handler = function(event, context, callback) {
  const contentfulClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const algoliaClient = algoliasearch(
    process.env.ALGOLIA_APP,
    process.env.ALGOLIA_KEY
  )
  const index = algoliaClient.initIndex('recipes')

  contentfulClient
    .getEntries({
      content_type: 'recipe',
      select: 'fields'
    })
    .then(result => {
      return result.items.map(res => {
        return {
          objectID: res.sys.id,
          recipeName: res.fields.recipeName,
          subtitle: res.fields.subtitle,
          description: res.fields.description,
          ingredientslists: res.fields.ingredientslists,
          slug: res.fields.slug
        }
      })
    })
    .then(recipes => {
      index.saveObjects(recipes, function(err, content) {
        console.log('Added to Algolia:', content)
        callback(null, {
          statusCode: 200,
          body: 'Synced Algolia'
        })
      })
    })
}
