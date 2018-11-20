<template>
  <div>
    <!--
      <h1>Hello preview</h1>
      <h3>Slug: {{recipe.slug}}</h3>
    -->
    <recipe v-bind:recipe="recipe" />
  </div>
</template>

<script>
import { createClient } from '~/plugins/Contentful.js'
import Recipe from '~/components/recipe/Recipe'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com'
})

export default {
  data: function() {
    return {
      recipe: {}
    }
  },
  components: {
    Recipe
  },
  mounted: function() {
    if (this.$route.params.slug == 'base') return
    client
      .getEntries({
        content_type: 'recipe',
        'fields.slug': this.$route.params.slug
      })
      .then(result => {
        console.log('Preview result', result)
        this.recipe = result.items.map(({ sys, fields }) => {
          return { id: sys.id, ...fields }
        })[0]
      })
  }
}
</script>

<style></style>
