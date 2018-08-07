<template>
  <div class="nav-wrapper">
    <nav>
      <ul>
        <nuxt-link exact to="/"><li>Home</li></nuxt-link>
        <nuxt-link v-for="recipe in recipes" :key="recipe.slug" :to="recipe.slug"><li>{{ recipe.recipeName }}</li></nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapState({
      recipes: state => state.recipes
    })
  }
}
</script>

<style lang='scss' scoped>
@import '~/assets/css/_variables.scss';

.nav-wrapper {
  height: map-get($sizes, headerHeight);
  background-color: map-get($colors, headerBackground);
}

ul {
  list-style: none;
  padding: 15px 0;
  li {
    display: inline-block;
    margin-right: 40px;
  }

  a,
  a:active,
  a:visited {
    color: white;
    text-decoration: none;
  }
}

.nuxt-link-active {
  pointer-events: none;
  cursor: default;
  opacity: 0.7;
}
</style>
