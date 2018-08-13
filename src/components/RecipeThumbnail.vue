<template>
  <div class="recipe-thumbnail_wrapper" >
    <nuxt-link :to="recipe.slug" class="recipe-thumbnail_link">
      <div class="recipe-thumbnail_image_wrapper">
        <div class="recipe-thumbnail_image" :style="{ 'background-image': `url(${ recipeImageUrl })`}" />
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
    width: 256px;
    height: 256px;
    overflow: hidden;
    background-color: #760086;
  }
  .recipe-thumbnail_image {
    background-position: 50% 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
  }

  :hover,
  :focus {
    .recipe-thumbnail_image {
      transform: scale(1.05);
      opacity: 0.75;
    }
  }
}

// .recipe-thumbnail_wrapper:hover .recipe-thumbnail_image_wrapper,
// .recipe-thumbnail_wrapper:focus .recipe-thumbnail_image_wrapper {

// }
</style>
