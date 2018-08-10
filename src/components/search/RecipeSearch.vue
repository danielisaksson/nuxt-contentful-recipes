<template>
  <div class="recipesearch_wrapper">
      <ais-input :search-store="searchStore" placeholder="search recipes"></ais-input>
  </div>
</template>

<script>
import { createFromAlgoliaCredentials } from 'vue-instantsearch'

const searchStore = createFromAlgoliaCredentials(
  process.env.ALGOLIA_APP,
  process.env.ALGOLIA_SEARCH_KEY
)

export default {
  data() {
    return {
      searchStore
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  font-size: 16px;
  background-color: whitesmoke;
  border-radius: 2rem;
  text-align: center;
  margin: 8px;
  padding: 4px;
}
</style>
