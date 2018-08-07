<template>
  <div class="footerWrapper">Footer</div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/css/_variables.scss';

.footerWrapper {
  height: map-get($sizes, footerHeight);
  background-color: map-get($colors, footerBackground);
  color: map-get($colors, footerText);
  padding: 20px;
}
</style>
