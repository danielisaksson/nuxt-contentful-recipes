<template>
  <section class="wrapper">
      <!-- <h1 class="title">
        nuxt-contentful-recipes
      </h1> -->

      <!-- <ul>
        <li v-for="recipe in recipes" :key="recipe.slug">
          <nuxt-link :to="recipe.slug">{{ recipe.recipeName }}</nuxt-link>
        </li>
      </ul> -->

     <algolia-store-index>
       <recipe-search-results></recipe-search-results>
    </algolia-store-index>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import AlgoliaStoreIndex from '~/components/search/AlgoliaStoreIndex'
import RecipeSearchResults from '~/components/search/RecipeSearchResults'

export default {
  data() {
    return {}
  },
  components: {
    AlgoliaStoreIndex,
    RecipeSearchResults
  },
  computed: {
    ...mapState({
      recipes: state => state.recipes
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

.wrapper {
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
}
</style>
