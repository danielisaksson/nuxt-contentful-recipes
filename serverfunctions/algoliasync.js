const contentful = require('contentful')
const algoliasearch = require('algoliasearch')
require('dotenv').config()

const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

const algoliaClient = algoliasearch(
  process.env.ALGOLIA_APP,
  process.env.ALGOLIA_KEY
)
const index = algoliaClient.initIndex('recipes')

let recipes = []

contentfulClient
  .getEntries({
    content_type: 'recipe',
    select: 'fields'
  })
  .then(result => {
    recipes = result.items.map(res => {
      return {
        objectID: res.sys.id,
        recipeName: res.fields.recipeName,
        subtitle: res.fields.subtitle,
        description: res.fields.description,
        ingredientslists: res.fields.ingredientslists,
        slug: res.fields.slug
      }
    })
    // console.log('recipes is ', recipes)
  })
  .then(() => {
    index.saveObjects(recipes, function(err, content) {
      console.log('Added to Algolia:', content)
    })
  })
