<template>
  <div class="recipe-body">
    <div
      class="recipe-body__description"
      v-html="$md.render(description)"
    ></div>
    <div
      class="recipe-body__instructions"
      v-html="$md.render(instructions)"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default:
        'Inspirerat av Jamie Olivers Black bean burger och vanliga sojaburgare ur Vego kokboken.'
    },
    instructions: {
      type: String,
      default:
        '## Instruktioner\n\nFinhacka och fräs löken mjuk på låg värme.\n\nMixa havregryn i matberedare, häll på de avrunna bönorna och mixa igen till en smet, späd med lite vatten om det behövs. Blanda i löken och de övriga ingredienserna och rör ihop till en fast smet.\n\nRulla till bollar, platta ut dom och stek tills dom känns fasta.\n\nServera gärna med avocado, salsa, ruccola, tomat och groddar.'
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/_variables.scss';

.recipe-body {
  text-align: left;
  padding: 0 20px;
  &__description {
    margin-bottom: 40px;
  }
}
</style>
