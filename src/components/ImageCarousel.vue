<template>
  <no-ssr placeholder="Loading...">
    <swiper :options="swiperOption">
      <swiper-slide><img src="https://unsplash.it/1400/600?random"/></swiper-slide>
      <swiper-slide><img src="https://unsplash.it/1400/600?random"/></swiper-slide>
      <swiper-slide><img src="https://unsplash.it/1400/600?random"/></swiper-slide>
      <swiper-slide><img src="https://unsplash.it/1400/600?random"/></swiper-slide>
      <swiper-slide><img src="https://unsplash.it/1400/600?random"/></swiper-slide>
      <swiper-slide><img src="https://unsplash.it/1400/600?random"/></swiper-slide>
      <swiper-slide><img src="https://unsplash.it/1400/600?random"/></swiper-slide>
      <swiper-slide><img src="https://unsplash.it/1400/600?random"/></swiper-slide>
      <swiper-slide><img src="https://unsplash.it/1400/600?random"/></swiper-slide>
      <swiper-slide><img src="https://unsplash.it/1400/600?random"/></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </no-ssr>

</template>

<script>
import '~/assets/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style>
</style>
