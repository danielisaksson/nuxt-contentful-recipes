<template>
  <section class="wrapper">
    <div
      v-masonry
      transition-duration="0"
      class="masonry-container"
      itemSelector=".grid-item"
      percentPosition="true"
      v-show="showGrid"
      gutter="80"
    >
      <!-- <div class="grid-sizer" /> -->
      <recipe-thumbnail
        v-masonry-tile
        class="grid-item"
        v-for="recipe in recipes"
        :key="recipe.slug"
        :id="recipe.id"
      />
    </div>
  </section>
</template>

<script>
import RecipeThumbnail from '~/components/RecipeThumbnail'

export default {
  data() {
    return {
      recipes: [],
      showGrid: false
    }
  },
  components: {
    RecipeThumbnail
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
      this.showGrid = true
    }
  },
  async asyncData({ params, store }) {
    console.log('Startpage Fetch Recipes')
    let recipes = await store.dispatch('recipes/getRecipes')
    console.log('recipes.length = ', recipes.length)
    return { recipes: recipes }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';
@import '~/assets/css/mixins.scss';

.grid-item,
.grid-sizer {
  @include masonry-column();
}

.fade {
  &-transition {
    transition: opacity 3s ease-in;
  }
  &-enter,
  &-leave {
    opacity: 0;
  }
}

.masonry-container {
  width: 100vw;
  max-width: $max-width;
  margin: 40px auto;
}
</style>
