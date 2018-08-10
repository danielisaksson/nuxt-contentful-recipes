<template>
  <div class="recipe">
    <header-image :imageUrl="getHeaderImage">
        <recipe-title v-bind:title="recipe.recipeName" v-bind:subtitle="recipe.subtitle" />
    </header-image>

    <div id="recipe-description" class="wrapper recipe-description">
      <recipe-description v-bind:description="recipe.description" />
    </div>

    <div id="recipe-body" class="wrapper recipe-body">
      <ingredients-list v-bind:ingredientslists="recipe.ingredientslists"/>
      <cooking-instructions v-bind:instructions="recipe.instructions" />
    </div>

    <div id="recipe-footer" class="wrapper recipe-footer">
      <ul class="tags">
        <li class="tag" v-for="tag in recipe.tags" :key="tag"> {{ tag }}</li>
      </ul>
    </div>

    <!-- <no-ssr>
      <carousel :perPage=1>
        <slide>Slide 1</slide>
        <slide>Slide 2</slide>
        <slide>Slide 3</slide>
      </carousel>
    </no-ssr> -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import IngredientsList from '~/components/recipe/IngredientsList'
import CookingInstructions from '~/components/recipe/CookingInstructions'
import RecipeDescription from '~/components/recipe/RecipeDescription'
import RecipeTitle from '~/components/recipe/RecipeTitle'
import HeaderImage from '~/components/recipe/HeaderImage'

// import { Carousel, Slide } from 'vue-carousel'

export default {
  data: function() {
    return {}
  },
  components: {
    IngredientsList,
    CookingInstructions,
    RecipeDescription,
    RecipeTitle,
    HeaderImage
    // Carousel,
    // Slide
  },
  computed: {
    getHeaderImage: function() {
      const index = Math.floor(Math.random() * 1084)
      return this.recipe.images
        ? `${
            this.recipe.images[0].fields.file.url
          }?w=1400&h=933&fit=fill&fm=jpg&q=70&fl=progressive`
        : `https://picsum.photos/1920/800/?image=${index}`
    },
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
@import '~/assets/css/_variables.scss';

.wrapper {
  position: relative;
  max-width: map-get($mq-breakpoints, xlarge);
  margin: 0 auto;
  text-align: left;
}
//$mq-breakpoints
@media screen and (max-width: map-get($mq-breakpoints, xlarge)) {
  .wrapper {
    margin-left: 30px;
    margin-right: 30px;
  }
}

.recipe-body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
}

.recipe-footer {
  margin-top: 3rem;
  margin-bottom: 3rem;

  &::before {
    content: '';
    border-bottom: solid 1px #3b9792;
    position: absolute;
    top: -0.85rem;
    width: 100%;
  }
}

.tags {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.tag {
  font-weight: 700;
  border: 2px solid #3b9792;
  border-radius: 2em;
  font-size: 0.65em;
  margin: 0.3em;
  text-transform: uppercase;
  padding: 0.4em 1em;
}

.recipe__header {
  width: 100vw;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.recipe__header > h1 {
  font-size: 74px;
  color: #fff;
}
</style>
