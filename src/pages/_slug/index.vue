<template>
  <div>
    <recipe v-bind:recipe="recipe" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Recipe from '~/components/recipe/Recipe'

export default {
  async asyncData({ params, error, payload }) {
    if (payload) {
      // Todo: Save the payload to Vuex store
      // this.$store.commit('recipes/setRecipe', payload)
      return { payload: payload }
    }
  },
  data: function() {
    return {}
  },
  components: {
    Recipe
  },
  computed: {
    // Get recipe from Vuex Store if there is no payload. Payload is only available in SSR Generate process

    recipe: function() {
      if (this.payload) {
        this.$store.commit('recipes/setRecipe', this.payload)
        console.log('Get Recipe from Payload', this.payload.slug)
        return this.payload
      } else {
        console.log('Get Recipe from Vuex by Slug', this.$route.params.slug)
        return this.$store.getters['recipes/getRecipeBySlug'](
          this.$route.params.slug
        )
      }
    }
    /* ...mapState({
      recipe: function(state) {
        return state.recipes.find(
          recipe => recipe.slug == this.$route.params.slug
        )
      }
    }) */
  }
}
</script>
<style lang="scss" scoped>
// @import '~/assets/css/_variables.scss';
</style>
