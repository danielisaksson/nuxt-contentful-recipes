<template>
  <div class="recipe__header">
    <h1>{{ title }}</h1>
    <p class="caption">{{ subtitle }}</p>
    <ul class="recipe__tags">
      <li class="recipe__tag" v-for="tag in tags" :key="tag">
        <nuxt-link :to="`/search?q=${tag}`">{{ tag }}</nuxt-link>
      </li>
    </ul>
    <ul class="recipe-detail__list">
      <li class="recipe-detail__item">
        <p class="recipe-detail__value">{{ servings }}</p>
        <p class="recipe-detail__label">Portioner</p>
      </li>
      <li class="recipe-detail__item">
        <p class="recipe-detail__value">{{ cookingtime }}</p>
        <p class="recipe-detail__label">Minuter</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Sobanudlar med Teriyaki-champinjoner'
    },
    subtitle: {
      type: String,
      default: 'Härliga nudlar med ugnsrostad svamp, broccoli och grönkål'
    },
    tags: {
      type: Array,
      default: () => ['Vardagsmat', 'Pasta', 'Middag']
    },
    servings: {
      type: Number,
      default: 5
    },
    cookingtime: {
      type: Number,
      default: 45
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

.recipe-detail {
  &__list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 15px 0;
  }

  &__item {
    display: flex;
    flex-direction: column;
    margin: 0 15px;
  }

  &__value {
    font-family: Noto Serif;
    font-style: normal;
    font-weight: bold;
    line-height: 1;
    font-size: calc(20px + 1vw);
    margin: 0;
  }

  &__label {
    font-size: 0.75em;
    margin: 0;
    text-transform: uppercase;
  }
}

.recipe {
  &__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: solid 1px #aaa8a1;
    padding: 20px;
  }
  &__tags {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0 20px 0;
  }

  &__tag {
    font-size: 0.75em;
    margin: 0 8px;
    text-transform: uppercase;

    a {
      text-decoration: underline;
      color: #c35c11;
    }
    // padding: 0.4em 1em;
  }
}
</style>
