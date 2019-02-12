<template>
  <div class="recipe-thumbnail_wrapper">
    <nuxt-link :to="recipe.slug" class="recipe-thumbnail_link">
      <img
        class="recipe-thumbnail_image"
        v-if="hasImage"
        :src="recipeImageUrl"
      />
      <h3 :class="thumbnailNameClass(recipe.recipeName)">
        {{ recipe.recipeName }}
      </h3>
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
  methods: {
    thumbnailNameClass(text) {
      const hasLongWord = text.split(' ').find(word => {
        return word.length >= 12
      })

      return hasLongWord
        ? 'recipe-thumbnail__name'
        : 'recipe-thumbnail__name--large'
    }
  },
  computed: {
    recipe: function() {
      // console.log('Thumbnail for', this.id)
      let res = this.$store.getters['recipes/getRecipeByID'](this.id)
      // console.log('res', res)
      return res
    },
    hasImage: function() {
      if (this.recipe.images && this.recipe.images.length > 0) {
        return true
      } else {
        return false
      }
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
.recipe-thumbnail {
  &_wrapper {
    max-width: 520px;
    // min-width: 300px;
    // min-height: 120px;
    // max-height: 400px;
    width: 100%;
    // margin: 15px;
    padding: 10px;
    overflow-wrap: break-word;
    background-color: white;
    position: relative;
  }

  &_image {
    width: 100%;
  }

  &__name {
    font-family: 'Zilla Slab', serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 2rem;
    margin: 0.5rem 0 0.5rem 0;
    text-transform: uppercase;
  }

  &__name--large {
    font-family: 'Zilla Slab', serif;
    font-size: 42px;
    font-weight: 400;
    line-height: 2.85rem;
    margin: 0.5rem 0 0.5rem 0;
    text-transform: uppercase;
  }

  &__subtitle {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    text-transform: lowercase;
    line-height: 1.5rem;
    margin: 0.5rem 0 0.5rem 0;
  }
}

// .thumbnail__subtitle--image {
//   text-align: center;
//   color: #fff;
// }

// .recipe-thumbnail_wrapper {
//   // background-color: black;
//   // border: 1px solid salmon;
//   // min-height: 200px;
//   max-width: 520px;
//   min-width: 300px;
//   margin: 15px;
//   text-align: left;
//   overflow-wrap: break-word;

//   .recipe-thumbnail_image_wrapper {
//     border-radius: 3px;
//     width: 100%;
//     height: 220px;
//     overflow: hidden;
//     background-color: #222222;
//   }
//   .recipe-thumbnail_image {
//     position: static;
//     background-position: 50% 50%;
//     background-size: cover;
//     width: 100%;
//     height: 100%;
//     transition: all 0.2s ease-in-out;
//   }

//   :hover,
//   :focus {
//     .recipe-thumbnail_image {
//       transform: scale(1.05);
//       opacity: 0.75;
//     }
//   }
// }

// .recipe-thumbnail_wrapper:hover .recipe-thumbnail_image_wrapper,
// .recipe-thumbnail_wrapper:focus .recipe-thumbnail_image_wrapper {

// }
</style>
