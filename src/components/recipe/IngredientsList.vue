<template>
  <div
    class="recipe__ingredients-list"
    v-html="$md.render(parsedIngredientsLists)"
  ></div>
</template>

<script>
const unitsReg = /((([\d\u00BC-\u00BE])+[\s\-\,]*([\d\u00BC-\u00BE])?)+\s*(dl|st|msk|tsk|näve|l|liter|ml|klyftor|buntar|stjälkar|g|mg|kg|paket)(?=[\s\,\.\!\)]))/gi

export default {
  props: {
    ingredientslists: {
      type: String,
      default: '## Ingredienser'
    }
  },
  computed: {
    parsedIngredientsLists: function() {
      if (!this.ingredientslists) return ''
      console.log(unitsReg.test(this.ingredientslists))
      return this.ingredientslists.replace(unitsReg, '**$2 _$5_**')
    }
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

  strong {
    color: #313131;
    font-size: 1.05em;
  }

  em {
    font-style: normal;
    font-weight: 400;
  }

  @media screen and (max-width: 558px) {
    order: -1;
  }
}
</style>
