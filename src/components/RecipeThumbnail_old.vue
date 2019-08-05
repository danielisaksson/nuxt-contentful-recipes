<template>
  <!--
    <div class="recipe-thumbnail_wrapper">
    <section class="recipe-thumbnail_text recipe-thumbnail_text--image">
      <h3 class="thumbnail__name">Ett ganska långt namn</h3>
      <p class="thumbnail__subtitle">En ganska lång subtitle</p>
    </section>
    <div class="recipe-thumbnail_image_wrapper">
          <div
            class="recipe-thumbnail_image"
            style="background-image: url(https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);"
          />
        </div>
    </div>
  -->
  <div class="recipe-thumbnail_wrapper">
    <nuxt-link :to="recipe.slug" class="recipe-thumbnail_link">
      <section
        class="recipe-thumbnail_text"
        v-bind:class="{ imageOverlayText: recipe.images }"
      >
        <h3 :class="thumbnailNameClass(recipe.recipeName)">
          {{ recipe.recipeName }}
        </h3>
        <p class="thumbnail__subtitle">{{ recipe.subtitle }}</p>
      </section>

      <div class="recipe-thumbnail_image_wrapper" v-if="recipe.images">
        <div
          class="recipe-thumbnail_image"
          :style="{ 'background-image': `url(${recipeImageUrl})` }"
        />
      </div>
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

      return hasLongWord ? 'thumbnail__name' : 'thumbnail__name--large'
    }
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
.recipe-thumbnail_wrapper {
  max-width: 520px;
  min-width: 300px;
  min-height: 120px;
  margin: 15px;
  overflow-wrap: break-word;
  background-color: white;
  position: relative;

  .recipe-thumbnail_text {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
    // pointer-events: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 4px;
  }

  .imageOverlayText {
    align-items: center;
    color: white;

    > * {
      margin: 4px;
    }
  }

  .recipe-thumbnail_image_wrapper {
    border-radius: 3px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000;
  }

  .recipe-thumbnail_image {
    background-position: 50% 50%;
    background-size: cover;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
    opacity: 0.6;
  }

  :hover,
  :focus {
    .recipe-thumbnail_image {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }
}

.thumbnail__name {
  font-family: 'Zilla Slab', serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 2rem;
  margin: 0.5rem 0 0.5rem 0;
  text-transform: uppercase;
}

.thumbnail__name--large {
  font-family: 'Zilla Slab', serif;
  font-size: 42px;
  font-weight: 400;
  line-height: 2.85rem;
  margin: 0.5rem 0 0.5rem 0;
  text-transform: uppercase;
}

.thumbnail__subtitle {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  text-transform: lowercase;
  line-height: 1.5rem;
  margin: 0.5rem 0 0.5rem 0;
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
