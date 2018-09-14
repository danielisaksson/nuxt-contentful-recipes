<template>
  <div>
    <recipe v-bind:recipe="recipe" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Recipe from '~/components/recipe/Recipe'

export default {
  data: function() {
    return {}
  },
  components: {
    Recipe
  },
  computed: {
    ...mapState({
      recipe: function(state) {
        return state.recipes.find(
          recipe => recipe.slug == this.$route.params.slug
        )
      }
    })
  }
}
</script>
<style lang="scss" scoped>
// @import '~/assets/css/_variables.scss';
</style>
