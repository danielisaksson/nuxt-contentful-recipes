<template>
  <div class="app-wrapper">
    <header class="app-header">
      <app-header></app-header>
    </header>
    <main class="app-body">
      <nuxt />
    </main>
    <footer class="app-footer">
      <app-footer />
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
  },
  mounted() {
    window.addEventListener('click', event => {
      const { target } = event
      // handle only links that do not reference external resources
      if (target && target.matches("a:not([href*='://'])") && target.href) {
        // some sanity checks taken from vue-router:
        // https://github.com/vuejs/vue-router/blob/dev/src/components/link.js#L106
        const {
          altKey,
          ctrlKey,
          metaKey,
          shiftKey,
          button,
          defaultPrevented
        } = event
        // don't handle with control keys
        if (metaKey || altKey || ctrlKey || shiftKey) return
        // don't handle when preventDefault called
        if (defaultPrevented) return
        // don't handle right clicks
        if (button !== undefined && button !== 0) return
        // don't handle if `target="_blank"`
        if (target && target.getAttribute) {
          const linkTarget = target.getAttribute('target')
          if (/\b_blank\b/i.test(linkTarget)) return
        }
        // don't handle same page links/anchors
        const url = new URL(target.href)
        const to = url.pathname
        if (window.location.pathname !== to && event.preventDefault) {
          event.preventDefault()
          this.$router.push(to)
        }
      }
    })
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
  display: flex;
  flex-direction: column;
}

.app-header {
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 1000;
  flex-shrink: 0;
}

.app-body {
  flex: auto;
  display: flex;
  flex-direction: column;
}

.app-footer {
  flex-shrink: 0;
}
</style>
