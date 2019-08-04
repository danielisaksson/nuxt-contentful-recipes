<template>
  <div
    class="recipe__ingredients-list"
    v-html="$md.render(parsedIngredientsLists)"
  ></div>
</template>

<script>
const unitsReg = /((([\d\u00BC-\u00BE])+[\s\-\,]*([\d\u00BC-\u00BE])?)+\s*(dl|st|msk|tsk|näve|l|liter|ml|klyftor|buntar|stjälkar|g|mg|kg|paket|pkt|brk|liter|stycken)*(?=[\s\,\.\!\)]))/gi

export default {
  props: {
    ingredientslists: {
      type: String,
      default:
        '## Ingredienser\n\n- 1.5 dl Havregryn\n- 1 burk svarta bönor\n- 1 gul lök\n- ca 2 msk vatten\n- 400 g sojafärs (tinad om den är fryst)\n- 0.5 dl majsmjöl (eller annat mjöl)\n- 1 tsk lökpulver\n- 1 tsk vitlökspulver\n- 1 tsk senapspulver\n- 1 tsk paprikapulver (gärna rökt)\n- 1 msk sojasås\n- Salt\n- Svartpeppar'
    }
  },
  computed: {
    parsedIngredientsLists: function() {
      if (!this.ingredientslists) return ''
      console.log(unitsReg.test(this.ingredientslists))
      // return this.ingredientslists.replace(unitsReg, '**$2 _$5_**')
      return this.ingredientslists
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/_variables.scss';

.recipe__ingredients-list {
  order: 2;
  // flex: 1 1 200px;

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
