<template>
  <div><recipe v-bind:recipe="recipe" /></div>
</template>
<script>
import { mapState } from 'vuex'
import Recipe from '~/components/recipe/Recipe'

export default {
  async asyncData({ store, params, payload }) {
    if (payload) {
      // In the generate process we get the payload object here
      // We commit it to the store for future use
      store.commit('recipes/setRecipe', payload)
      return { recipe: payload }
    } else {
      // Await while the store gets the content
      const content = await store.dispatch('recipes/getRecipe', params.slug)
      return { recipe: content }
    }
  },
  components: {
    Recipe
  }
}
</script>
<style lang="scss" scoped>
// @import '~/assets/css/_variables.scss';
</style>
