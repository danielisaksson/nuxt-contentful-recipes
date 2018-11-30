<template>
  <ais-index :search-store="searchStore" index-name="recipes" :query="query">
    <slot></slot>
  </ais-index>
</template>

<script>
import { createFromAlgoliaCredentials } from 'vue-instantsearch'

const searchStore = createFromAlgoliaCredentials(
  process.env.ALGOLIA_APP,
  process.env.ALGOLIA_SEARCH_KEY
)

export default {
  props: {
    query: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      searchStore
    }
  },
  watch: {
    'searchStore.query'(value) {
      this.$router.push({
        name: 'search',
        query: { q: value }
      })
    }
  }
}
</script>

<style lang="scss">
input {
  font-size: 16px;
  background-color: whitesmoke;
  border-radius: 2rem;
  text-align: center;
  margin: 8px;
  padding: 4px;
}
</style>
