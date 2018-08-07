<template>
  <div class="recipe__header-image" :style="{ 'background-image': `url(${ imageUrl })`}">
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
.recipe__header-image {
  background: #363636;
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
  height: calc(100vh - 300px);
  max-height: 768px;
  min-height: 200px;
}
.recipe__header-image::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6) 0,
    transparent 60%
  );
}
</style>
