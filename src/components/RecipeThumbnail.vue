<template>
  <div class="recipe-thumbnail_wrapper">
    <nuxt-link :to="recipe.slug" class="recipe-thumbnail_link">
      <div class="recipe-thumbnail_card">
        <img
          class="recipe-thumbnail_image"
          v-if="hasImage"
          :src="recipeImageUrl"
        />
        <h1 :class="thumbnailNameClass(recipe.recipeName)">
          {{ recipe.recipeName }}
        </h1>
        <p class="caption">{{ recipe.subtitle }}</p>
        <!-- <p class="recipe-thumbnail__description">{{ recipe.description }}</p> -->
        <ul class="recipe-thumbnail__tags">
          <li
            class="recipe-thumbnail__tag"
            v-for="tag in recipe.tags"
            :key="tag"
          >
            <nuxt-link :to="`/search?q=${tag}`">{{ tag }}</nuxt-link>
          </li>
        </ul>
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
      const hasLongWord = text.split(/[\s,-]/).find(word => {
        return word.length >= 14
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
        ? `${this.recipe.images[0].fields.file.url}?w=456&fit=fill&fm=jpg&q=60&fl=progressive`
        : 'https://picsum.photos/456/256/?image=2'
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
@import '~/assets/css/_variables.scss';
@import '~/assets/css/mixins.scss';

.recipe-thumbnail {
  &_wrapper {
    max-width: 520px;
    // width: 100%;
    overflow-wrap: break-word;
    margin: 2px 0;

    position: relative;

    @media screen and (max-width: map-get($mq-breakpoints, medium)) {
      padding-left: 15px;
      padding-right: 15px;
    }

    &::after {
      content: '';
      border-bottom: solid 1px #aaa8a1;
      position: absolute;
      /* left: 5px;
      width: calc(100% - 10px); */
      width: 100%;
      left: 0px;
    }
  }

  /* &_card {
    // background-color: white;
    // padding: 5px;
    // border: 1px solid #dddddd;
  } */

  &_image {
    width: 100%;
  }

  &__description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__name {
    font-size: 28px;
    /* font-family: 'Zilla Slab', serif;
    font-weight: 400;
    line-height: 2rem;
    margin: 0.5rem 0 0.5rem 0;
    text-transform: uppercase; */
  }

  &__name--large {
    font-size: 42px;
    margin-top: 0.75rem;
    /*     font-family: 'Zilla Slab', serif;
    font-weight: 400;
    line-height: 2.85rem;
    margin: 0.5rem 0 0.5rem 0;
    text-transform: uppercase; */
  }

  /* &__subtitle {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    text-transform: lowercase;
    line-height: 1.5rem;
    margin: 0.5rem 0 0.5rem 0;
  } */

  &__tags {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0 20px 0;
  }

  &__tag {
    font-size: 0.75em;
    margin: 0 8px;
    text-transform: uppercase;

    a {
      text-decoration: underline;
      color: #c35c11;
    }
    // padding: 0.4em 1em;
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
