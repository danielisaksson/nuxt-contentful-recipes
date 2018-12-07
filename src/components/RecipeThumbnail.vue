<template>
  <div class="recipe-thumbnail_wrapper">
    <nuxt-link :to="recipe.slug" class="recipe-thumbnail_link">
      <div class="recipe-thumbnail_image_wrapper" v-if="recipe.images">
        <div
          class="recipe-thumbnail_image"
          :style="{ 'background-image': `url(${recipeImageUrl})` }"
        />
      </div>

      <h3 class="thumbnail__name">{{ recipe.recipeName }}</h3>
      <p class="thumbnail__subtitle">{{ recipe.subtitle }}</p>
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
    recipe: function() {
      // console.log('Thumbnail for', this.id)
      let res = this.$store.getters['recipes/getRecipeByID'](this.id)
      // console.log('res', res)
      return res
    },
    recipeImageUrl: function() {
      return this.recipe.images
        ? `${
            this.recipe.images[0].fields.file.url
          }?w=520&h=220&fit=fill&fm=jpg&q=60&fl=progressive`
        : 'https://picsum.photos/1920/800/?image=2'
    } /* ,
    ...mapState({
      recipe: function(state) {
        return state.recipes.find(recipe => recipe.id == this.id)
      }
    }) */
  }
}
</script>

<style lang="scss" scoped>
.thumbnail__name {
  font-family: 'Zilla Slab', serif;
  font-size: 4.375rem;
  font-weight: 400;
  line-height: 3.6rem;
  margin: 0.5rem 0 0.5rem 0;
  text-transform: uppercase;
}

.thumbnail__subtitle {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0.5rem 0 0.5rem 0;
}

.recipe-thumbnail_wrapper {
  // background-color: black;
  // border: 1px solid salmon;
  // min-height: 200px;
  max-width: 520px;
  margin: 15px;
  text-align: left;
  overflow-wrap: break-word;

  .recipe-thumbnail_image_wrapper {
    border-radius: 3px;
    width: 100%;
    height: 220px;
    overflow: hidden;
    background-color: #222222;
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
