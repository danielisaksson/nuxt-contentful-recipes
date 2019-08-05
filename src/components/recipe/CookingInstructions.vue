<template>
  <div class="recipe__cooking-instructions">
    <!-- <h2>Instruktioner</h2> -->
    <div v-html="$md.render(instructions)"></div>
  </div>
</template>

<script>
export default {
  props: {
    instructions: {
      type: String,
      default: 'No instructions...'
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/_variables.scss';

.recipe__cooking-instructions {
  flex: 5 5 300px;
  padding-right: 40px;

  p {
    padding-bottom: 0.85em;
  }
}
</style>
