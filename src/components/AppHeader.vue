<template>
  <div class="header-wrapper">
    <algolia-store-index>
      <ais-input placeholder="search recipes"></ais-input>
    </algolia-store-index>
  </div>
</template>

<script>
import AlgoliaStoreIndex from '~/components/search/AlgoliaStoreIndex'

export default {
  components: {
    AlgoliaStoreIndex
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';

.header-wrapper {
  min-height: map-get($sizes, headerHeight);
  background-color: map-get($colors, headerBackground);
}
</style>
