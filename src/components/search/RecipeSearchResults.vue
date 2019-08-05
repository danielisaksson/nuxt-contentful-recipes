<template>
  <ais-results
    v-masonry
    transition-duration="0"
    class="masonry-container"
    itemSelector=".grid-item"
    columnWidth=".grid-sizer"
    percentPosition="true"
    gutter="80"
    v-show="showGrid"
  >
    <div class="grid-sizer" />
    <template slot-scope="{ result }">
      <recipe-thumbnail
        v-masonry-tile
        class="grid-item"
        :id="result.objectID"
      />
    </template>
    <!-- <div slot="footer">
      <ais-powered-by></ais-powered-by>
    </div>-->
  </ais-results>

  <!-- </div> -->
</template>

<script>
import RecipeThumbnail from '~/components/RecipeThumbnail'

export default {
  data() {
    return {
      showGrid: false
    }
  },
  components: {
    RecipeThumbnail
  },
  created: function() {},
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
      this.showGrid = true
    }
  },
  watch: {
    '$route.query.q'() {
      console.log('q', this.$route.query.q)
      setTimeout(this.$redrawVueMasonry, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variables.scss';
@import '~/assets/css/mixins.scss';

.grid-item,
.grid-sizer {
  @include masonry-column();
}

.fade {
  &-transition {
    transition: opacity 3s ease-in;
  }
  &-enter,
  &-leave {
    opacity: 0;
  }
}

.masonry-container {
  width: 100vw;
  max-width: $max-width;
  margin: 40px auto;
}

/* .ais-results {
  width: 100%;
} */

/*

.ais-results {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  > * {
    flex: 1 1 380px;
  }
} */

.ais-powered-by {
  margin: 20px;
}
/* .recipe-results_list {
  // background-color: salmon;
  // text-align: center;
} */
</style>
