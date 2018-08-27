<template>
  <div class="header-wrapper">
    <algolia-store-index>
      <ais-input v-if="online" placeholder="search recipes"></ais-input>
    </algolia-store-index>
  </div>
</template>

<script>
import AlgoliaStoreIndex from '~/components/search/AlgoliaStoreIndex'

export default {
  data() {
    return {
      online: false
    }
  },
  components: {
    AlgoliaStoreIndex
  },
  methods: {
    updateOnlineStatus: function(event) {
      this.online = navigator.onLine
      console.log('online: ' + this.online)
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.updateOnlineStatus()
      window.addEventListener('online', this.updateOnlineStatus)
      window.addEventListener('offline', this.updateOnlineStatus)
    })
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
