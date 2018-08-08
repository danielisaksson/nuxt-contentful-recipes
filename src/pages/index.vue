<template>
  <section class="container">
      <h1 class="title">
        nuxt-contentful-recipes
      </h1>

      <ul>
        <li v-for="recipe in recipes" :key="recipe.slug">
          <nuxt-link :to="recipe.slug">{{ recipe.recipeName }}</nuxt-link>
        </li>
      </ul>

      <ais-index
      :search-store="searchStore"
      index-name="recipes"
    >
      <ais-search-box></ais-search-box>
      <ais-clear></ais-clear>
      <ais-results v-show="searchStore.query.length > 0">
        <template slot-scope="{ result }">
          <h2>
            <a :href="`/${result.slug}`">
              <ais-highlight :result="result" attribute-name="recipeName"></ais-highlight>
            </a>
          </h2>
          <p>{{ result.subtitle }}</p>
        </template>
        <div slot="footer"><ais-powered-by></ais-powered-by></div>
      </ais-results>
    </ais-index>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { createFromAlgoliaCredentials } from 'vue-instantsearch'

const searchStore = createFromAlgoliaCredentials(
  process.env.ALGOLIA_APP,
  process.env.ALGOLIA_SEARCH_KEY
)

export default {
  data() {
    return { searchStore }
  },
  components: {},
  computed: {
    ...mapState({
      recipes: state => state.recipes
    })
  }
}
</script>

<style>
</style>
