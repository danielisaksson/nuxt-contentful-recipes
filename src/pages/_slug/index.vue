<template>
  <div><recipe v-bind:recipe="recipe" /></div>
</template>
<script>
import { mapState } from 'vuex'
import Recipe from '~/components/recipe/Recipe'

export default {
  async asyncData({ params, error, payload }) {
    if (payload) {
      // Todo: Save the payload to Vuex store
      console.log('Got payload', payload.slug)
      return { payload: payload }
    }
  },
  data: function() {
    return {
      storerecipe: undefined
    }
  },
  components: {
    Recipe
  },
  created: function() {
    if (!this.payload) {
      this.$store
        .dispatch('recipes/getRecipe', this.$route.params.slug)
        .then(res => {
          console.log('Got Recipe from Vuex action')
          this.storerecipe = res
        })
    }
  },
  computed: {
    // Get recipe from Vuex Store if there is no payload. Payload is only available in SSR Generate process
    recipe: function() {
      if (this.payload) {
        this.$store.commit('recipes/setRecipe', this.payload)
        return this.payload
      } else {
        return this.storerecipe
      }
    }
  }
}
</script>
<style lang="scss" scoped>
// @import '~/assets/css/_variables.scss';
</style>
