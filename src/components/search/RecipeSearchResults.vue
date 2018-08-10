<template>
  <!-- <div class="recipe-results_list" v-if="this.$parent.searchStore.query != ''"> -->
  <div class="recipe-results_list">
    <ais-results >
      <template slot-scope="{ result }">
        <recipe-thumbnail v-bind:id="result.objectID"></recipe-thumbnail>
        <!-- <h2>
          <a :href="`/${result.slug}`">
            <ais-highlight :result="result" attribute-name="recipeName"></ais-highlight>
          </a>
        </h2>
        <p>{{ result.subtitle }}</p> -->
      </template>

    </ais-results>
    <!-- <div slot="footer"><ais-powered-by></ais-powered-by></div> -->
  </div>
</template>

<script>
import RecipeThumbnail from '~/components/RecipeThumbnail'

export default {
  components: {
    RecipeThumbnail
  },
  created: function() {}
}
</script>

<style lang="scss" scoped>
.ais-results {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  > * {
    flex: 1 1 320px;
  }
}
.recipe-results_list {
  // background-color: salmon;
  text-align: center;
}
.ais-powered-by {
  margin: 20px;
}
</style>
