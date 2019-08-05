<template>
  <div class="recipe__title">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style lang="scss">
@import '~/assets/css/_variables.scss';

.recipe__title {
  // position: absolute;
  width: 100%;
  // bottom: 5%;
  color: #fff;
  overflow: hidden;
  margin-top: 2.5rem;
  margin-bottom: 2rem;

  > * {
    padding: 0px 30px;
  }

  h1 {
    line-height: 1.05em;
  }
}
</style>
