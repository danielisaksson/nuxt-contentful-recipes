<template>
  <div class="recipe">
    <header-image :imageUrl="getHeaderImage">
    <!-- <div id="recipe-background-image" class="recipe-background-image" style="background-image: url('https://lh3.googleusercontent.com/nDu3yX57vVsmoyvNaWYqYqJ2BPIq0oj73f0abKl2wYBYntsf8Ea3GkRmImYMTPvcmTCNSfVsdgV74MFORUrH=s730-e365');">
      <div class="title-wrapper"> -->
        <recipe-title v-bind:title="recipe.recipeName" v-bind:subtitle="recipe.subtitle" />
        <!-- <div class="recipe-title">
          <h1>{{ recipe.recipeName }}</h1>
          <h3>{{ recipe.subtitle }}</h3>
        </div> -->
      <!-- </div>
    </div> -->
    </header-image>

    <div id="recipe-description" class="wrapper recipe-description">
      <p v-html="$md.render(recipe.description)"></p>
    </div>

    <div id="recipe-body" class="wrapper recipe-body">
      <ingredients-list v-bind:ingredientslists="recipe.ingredientslists"/>
      <cooking-instructions v-bind:instructions="recipe.instructions" />
      <!-- <div class="recipe-ingredients" v-html="$md.render(recipe.ingredientslists)">
      </div> -->
      <!-- <div class="recipe-instructions" v-html="$md.render(recipe.instructions)">
      </div> -->
    </div>

    <div id="recipe-footer" class="wrapper recipe-footer">
      <ul class="tags">
        <li class="tag" v-for="tag in recipe.tags" :key="tag"> {{ tag }}</li>
      </ul>
    </div>

    <no-ssr>
      <carousel :perPage=1>
        <slide>Slide 1</slide>
        <slide>Slide 2</slide>
        <slide>Slide 3</slide>
      </carousel>
    </no-ssr>
    <!-- <div v-html="$md.render(markdowntest)"></div> -->

    <!-- <div v-if="recipe.images" class="recipe__header" :style="{ 'background-image': `url(${ recipe.images[0].fields.file.url })`}"> -->
    <!-- <div class="recipe__header">
      <h1>{{ recipe.recipeName }}</h1>
    </div>
    <pre>{{ recipe.slug }}</pre>
    <p>{{ recipe.description }}</p>
    <p>{{ recipe.instructions }}</p>
    <ul class="tags">
      <li class="tag" v-for="tag in recipe.tags" :key="tag"> {{ tag }}</li>
    </ul>
    <ul class="recipe-images">
      <li v-for="image in recipe.images" :key="image.sys.id">
        <img :src="image.fields.file.url + '?w=300'" width="300" :alt="image.fields.file.fileName"/>
      </li>
    </ul> -->
    <!-- <h2>Ingredients:</h2>
    <div class="ingredient-groups" v-for="group in recipe.ingredients" :key="group.sys.id">
      <h3 class="ingredient-group-header">{{ group.fields.header }}</h3>
      <ul class="ingredients">
        <li class="ingredient" v-for="ingredient in group.fields.ingredient" :key="ingredient">{{ ingredient }}</li>
      </ul>
    </div> -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import IngredientsList from '~/components/recipe/IngredientsList'
import CookingInstructions from '~/components/recipe/CookingInstructions'
import RecipeTitle from '~/components/recipe/RecipeTitle'
import HeaderImage from '~/components/recipe/HeaderImage'

import { Carousel, Slide } from 'vue-carousel'

export default {
  data: function() {
    return {
      hello: 'Hi',
      markdowntest:
        '## Ingredienser\n\n- 1.5 dl Havregryn\n- 1 burk svarta bönor\n- 1 gul lök\n- ca 2 msk vatten\n- 400 g sojafärs (tinad om den är fryst)\n- 0.5 dl majsmjöl (eller annat mjöl)\n- 1 tsk lökpulver\n- 1 tsk vitlökspulver\n- 1 tsk senapspulver\n- 1 tsk paprikapulver (gärna rökt)\n- 1 msk sojasås\n- Salt\n- Svartpeppar\n\n## Tillbehör\n\n- Bröd\n- Saltgurka\n- Sallad\n- Tomat\n- Avocado\n- Groddar\n- Ost (vegan)\n- Picklad rödlök\n- Ketchup\n- Senap\n- Dressing'
    }
  },
  components: {
    IngredientsList,
    CookingInstructions,
    RecipeTitle,
    HeaderImage,
    Carousel,
    Slide
  },
  computed: {
    getHeaderImage: function() {
      const index = Math.floor(Math.random() * 1084)
      console.log('img', index)
      return `https://picsum.photos/1920/800/?image=${index}`
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

.recipe-background-image {
  background: #363636;
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
  height: calc(100vh - 300px);
  max-height: 768px;
  min-height: 200px;

  .title-wrapper {
    height: 100%;
  }
  .recipe-title {
    position: absolute;
    width: 100%;
    bottom: 10%;
    color: #fff;
    h1 {
      font-size: 64px;
      margin-bottom: -0.35em;
    }
  }
}
.recipe-background-image::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0,
    transparent 60%
  );
}

.recipe-description {
  font-size: 0.95em;
  color: map-get($colors, lightText);
  margin-top: 40px;
  margin-bottom: 20px;
}

.recipe-body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 20px;

  > * {
    margin-top: 20px;
    margin-bottom: 5px;
  }

  h2 h3 {
    margin-bottom: 0.4em;
  }
}

.recipe-ingredients {
  order: 2;
  flex: 1 1 200px;

  li {
    font-size: 0.85em;
    color: map-get($colors, lightText);
    padding: 0.15em 0;
  }
}

.recipe-ingredients li {
  color: pink;
  font-size: 0.85em;
  color: map-get($colors, lightText);
  padding: 0.15em 0;
}

.recipe-instructions {
  flex: 5 5 300px;
  padding-right: 40px;

  > * {
    color: pink;
    background-color: #3b9792;
  }
}

.recipe-footer {
  margin-top: 50px;
  margin-bottom: 5px;

  &::before {
    content: '';
    border-bottom: solid 1px #3b9792;
    position: absolute;
    top: -10px;
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
