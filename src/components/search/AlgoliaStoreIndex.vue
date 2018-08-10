<template>
  <ais-index
      :search-store="searchStore"
      index-name="recipes"
    >
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
  data() {
    return {
      searchStore
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
