<template>
  <div class="app-wrapper">
    <header class="app-header">
      <app-header></app-header>
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
import AppHeader from '~/components/AppHeader'
import AppFooter from '~/components/AppFooter'

export default {
  components: {
    AppHeader,
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
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 1000;
}

.app-body {
  min-height: calc(100vh - 146px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/*
.app-footer {
}
*/
</style>
