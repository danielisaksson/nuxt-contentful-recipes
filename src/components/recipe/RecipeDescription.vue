<template>
  <div class="recipe__description">
    <div v-html="$md.render(description)"></div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default:
        'Inspirerat av Jamie Olivers Black bean burger och vanliga sojaburgare ur Vego kokboken.'
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/_variables.scss';

.recipe__description {
  margin-top: 3rem;
  margin-bottom: 3rem;
  // text-align: center;
  /*   color: map-get($colors, lightText);
  p {
    font-size: 1.05rem;
    margin-bottom: 1rem;
    // padding-bottom: 0.85em;
  }
 */
}
</style>
