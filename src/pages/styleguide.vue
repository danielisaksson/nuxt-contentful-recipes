<template>
  <div class="page">
    <h1>H1 Sobanudlar med Teriyaki -champinjoner</h1>
    <h2>H2 Instruktioner</h2>
    <h3>H3 Tillbehör</h3>
    <p class="caption">
      Inspirerat av Jamie Olivers Black bean burger och vanliga sojaburgare ur
      Vego kokboken.
    </p>
    <p>
      Finhacka och fräs löken mjuk på låg värme. Mixa havregryn i matberedare,
      häll på de avrunna bönorna och mixa igen till en smet, späd med lite
      vatten om det behövs. Blanda i löken och de övriga ingredienserna och rör
      ihop till en fast smet. Rulla till bollar, platta ut dom och stek tills
      dom känns fasta. Servera gärna med avocado, salsa, ruccola, tomat och
      groddar.
    </p>
    <div class="recipe">
      <div class="recipe-section">
        <recipe-header class="recipe-headercontainer" />
        <recipe-image class="recipe-imagecontainer" />
      </div>
      <div class="recipe-section">
        <recipe-body class="recipe-body" />
        <ingredients-list class="recipe-ingredients" />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeHeader from '~/components/recipe/RecipeHeader'
import RecipeImage from '~/components/recipe/RecipeImage'
import IngredientsList from '~/components/recipe/IngredientsList'
import RecipeBody from '~/components/recipe/RecipeBody'

export default {
  components: {
    RecipeHeader,
    RecipeImage,
    IngredientsList,
    RecipeBody
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

.page {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  max-width: $max-width;
  margin: 20px auto;
}

.recipe {
  // flex: 1;
  // margin: 100px 0;

  &-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 60px 0;
  }

  &-imagecontainer {
    flex: 1 1 320px;
    min-height: 240px;

    @media screen and (max-width: 800px) {
      order: -1;
    }
  }

  &-headercontainer {
    flex: 1 1 440px;
  }

  &-body {
    flex: 1 1 440px;
  }

  &-ingredients {
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>
