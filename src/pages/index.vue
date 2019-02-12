<template>
  <section class="wrapper">
    <div
      v-masonry
      transition-duration="0"
      class="masonry-container"
      itemSelector=".grid-item"
      columnWidth=".grid-sizer"
      percentPosition="true"
      v-show="showGrid"
    >
      <div class="grid-sizer" />
      <recipe-thumbnail
        v-masonry-tile
        class="grid-item"
        v-for="recipe in recipes"
        :key="recipe.slug"
        :id="recipe.id"
      />
    </div>

    <!-- <div class="recipes_list">
      <recipe-thumbnail
        v-for="recipe in recipes"
        :key="recipe.slug"
        :id="recipe.id"
      />
    </div>-->
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

.grid-sizer,
.grid-item {
  width: 33.33%;

  @media screen and (max-width: map-get($mq-breakpoints, xlarge)) {
    width: 50%;
  }

  @media screen and (max-width: map-get($mq-breakpoints, medium)) {
    width: 100%;
  }
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
  max-width: map-get($mq-breakpoints, xxlarge);
  margin: 0 auto;
}
</style>
