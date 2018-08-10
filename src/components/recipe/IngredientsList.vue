<template>
  <div class="recipe__ingredients-list" v-html="$md.render(ingredientslists)">
  </div>
</template>

<script>
export default {
  props: {
    ingredientslists: String,
    default: '<ul><li>one</li><li>two</li></ul>'
  }
}
</script>

<style lang="scss">
@import '~/assets/css/_variables.scss';

.recipe__ingredients-list {
  order: 2;
  flex: 1 1 200px;

  li {
    font-size: 0.85em;
    color: map-get($colors, lightText);
    margin: 0.25rem 0;
  }

  ul {
    margin-bottom: 1.6rem;
  }

  @media screen and (max-width: 558px) {
    order: -1;
  }
}
</style>
