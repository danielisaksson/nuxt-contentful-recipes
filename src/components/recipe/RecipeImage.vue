<template>
  <div class="recipe-image" :style="{ 'background-image': `url(${imageUrl})` }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
      default:
        'https://lh3.googleusercontent.com/nDu3yX57vVsmoyvNaWYqYqJ2BPIq0oj73f0abKl2wYBYntsf8Ea3GkRmImYMTPvcmTCNSfVsdgV74MFORUrH=s730-e365'
    }
  }
}
</script>

<style lang="scss">
.recipe-image {
  background: #363636;
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
  min-width: 100px;
  min-height: 100px;
}
</style>
