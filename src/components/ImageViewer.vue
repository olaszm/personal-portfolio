<template>
  <div class="container" @click.self="closeImageViewer">
    <div class="container__inner wrapper" @click.self="closeImageViewer">
      <div class="image-container">
        <span class="chavron chavron--left" @click="prevImage"
          ><i class="fas fa-chevron-left"></i
        ></span>
        <img
          v-for="(item, index) in images"
          :key="index"
          :src="`${publicPath}${item}.webp`"
          :class="currentImageIndex == index ? 'current' : 'null'"
        />
        <span class="chavron chavron--right" @click="nextImage"
          ><i class="fas fa-chevron-right"></i
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/plugins/eventbus.js";
export default {
  props: ["images", "curr"],
  data() {
    return {
      currentImageIndex: this.$props.curr,
      publicPath: process.env.BASE_URL,
    };
  },

  methods: {
    closeImageViewer() {
      EventBus.$emit("toggleImageViewer", false);
    },
    nextImage() {
      if (this.currentImageIndex >= this.$props.images.length - 1) {
        this.currentImageIndex = 0;
      } else {
        this.currentImageIndex++;
      }
    },
    prevImage() {
      if (this.currentImageIndex <= 0) {
        this.currentImageIndex = this.$props.images.length - 1;
      } else {
        this.currentImageIndex--;
      }
    },
  },
};
</script>

<style scoped lang='scss'>
@import "@/style/_variables.scss";

.container {
  position: fixed;
  z-index: 15;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  &__inner {
    height: 100%;
    display: grid;
    place-items: center;
  }
}

.image-container {
  position: relative;
  display: grid;
  place-items: center;
  height: auto;
  width: 100%;
  img {
    position: absolute;
    max-height: 80vh;
    object-fit: contain;
    width: 100%;
  }
}

.chavron {
  position: absolute;
  color: $primary;
  z-index: 16;
  padding: 0 1rem;
  top: 50%;
  &--right {
    right: 0;
  }
  &--left {
    left: 0;
  }
}

.current {
  z-index: 15;
}
.null {
  opacity: 0;
  z-index: 0;
}
</style>
