<template>
  <section class="wrapper">
    <algolia-store-index :query="searchquery">
      <recipe-search-results></recipe-search-results>
    </algolia-store-index>
  </section>
</template>

<script>
import AlgoliaStoreIndex from '~/components/search/AlgoliaStoreIndex'
import RecipeSearchResults from '~/components/search/RecipeSearchResults'

export default {
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  components: {
    AlgoliaStoreIndex,
    RecipeSearchResults
  },
  data() {
    return {
      searchquery: ''
    }
  },
  async asyncData({ params, store }) {
    console.log('Search Fetch Recipes')
    let recipes = await store.dispatch('recipes/getRecipes')
    console.log('recipes.length = ', recipes.length)
    return { recipes: recipes }
  },
  created: function() {
    // `this` points to the vm instance
    this.searchquery = this.$route.query.q
    console.log('query is: ', this.$route.query.q)
  },
  beforeRouteUpdate(to, from, next) {
    if (to.query.q === '') {
      next({ path: '/' }) // Redirect to startpage if q is empty
    } else {
      next()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

/* .wrapper {
  position: relative;
  max-width: map-get($mq-breakpoints, xxlarge);
  margin: 0 auto;
  text-align: left;
}
//$mq-breakpoints
@media screen and (max-width: map-get($mq-breakpoints, xxlarge)) {
  .wrapper {
    margin-left: 30px;
    margin-right: 30px;
  }
} */
</style>
