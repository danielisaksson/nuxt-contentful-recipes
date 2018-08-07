<template>
  <div class="app-wrapper">
    <header class="app-header">
      <app-navigation/>
    </header>
    <main class="app-body">
      <nuxt/>
    </main>
    <footer class="app-footer">
      <app-footer/>
    </footer>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation'
import AppFooter from '~/components/AppFooter'

export default {
  components: {
    AppNavigation,
    AppFooter
  }
}
</script>


<style lang="scss">
@import '~/assets/css/main.scss';

.app-wrapper {
  min-height: 100vh;
  min-width: map-get($mq-breakpoints, tiny);
  margin: auto;
  text-align: center;
  position: relative;
}

.app-header {
  position: absolute;
  width: 100%;
}

.app-body {
  padding-top: map-get($sizes, headerHeight);
  padding-bottom: map-get($sizes, bottomPadding);
  min-height: calc(100vh - 80px);
  z-index: 100;
}

/*
.app-footer {
}
*/
</style>
