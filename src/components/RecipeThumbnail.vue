<template>
  <div class="recipe-thumbnail_wrapper" >
    <nuxt-link :to="recipe.slug">
      <div class="recipe-thumbnail_image_wrapper" :style="{ 'background-image': `url(${ recipeImageUrl })`}">
      </div>

      <h3>{{ recipe.recipeName }}</h3>
      <p>{{ recipe.subtitle }}</p>
    </nuxt-link>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'recipe-thumbnail',
  props: {
    id: String
  },
  computed: {
    recipeImageUrl: function() {
      return this.recipe.images
        ? `${
            this.recipe.images[0].fields.file.url
          }?w=256&h=256&fit=fill&fm=jpg&q=60&fl=progressive`
        : 'https://picsum.photos/1920/800/?image=2'
    },
    ...mapState({
      recipe: function(state) {
        return state.recipes.find(recipe => recipe.id == this.id)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.recipe-thumbnail_wrapper {
  // background-color: black;
  // border: 1px solid salmon;
  // min-height: 200px;
  max-width: 256px;
  margin: 15px;
  text-align: left;

  .recipe-thumbnail_image_wrapper {
    border-radius: 8px;
    background-position: 50% 50%;
    background-size: cover;
    width: 256px;
    height: 256px;
    overflow: hidden;
  }
}
</style>
