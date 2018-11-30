<template>
  <section class="wrapper">
    <div class="recipes_list">
      <recipe-thumbnail
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
      recipes: []
    }
  },
  components: {
    RecipeThumbnail
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

.recipes_list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  > * {
    flex: 1 1 320px;
  }
}

.wrapper {
  position: relative;
  max-width: map-get($mq-breakpoints, xxlarge);
  margin: 0 auto;
  text-align: left;
}
//$mq-breakpoints
@media screen and (max-width: map-get($mq-breakpoints, xxlarge)) {
  .wrapper {
    margin-left: 30px;
    margin-right: 30px;
  }
}
</style>
