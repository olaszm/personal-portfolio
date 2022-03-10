<template>
  <div class="cursor" :class="isMobile ? 'on-mobile' : ''" ref="CursorEl"></div>
</template>

<script>
export default {
  props: {
    isMobile: {
      required: true,
    },
  },
  data() {
    return {};
  },
  watch: {
    $route() {
      setTimeout(() => {
        this.getAllHoverableElements();
      }, 600);
    },
  },
  methods: {
    animateCursorIn(cursor) {
      cursor.classList.add("cursor-big");
    },
    animateCursorOut(cursor) {
      cursor.classList.remove("cursor-big");
    },
    getAllHoverableElements() {
      if (!this.isMobile) {
        let cursor = this.$refs.CursorEl;

        let cursorHovers = [...document.querySelectorAll(".hoverable")];

        cursorHovers.forEach((item) => {
          item.addEventListener("mouseover", () => {
            this.animateCursorIn(cursor);
          });
          item.addEventListener("mouseleave", () => {
            this.animateCursorOut(cursor);
          });
        });
      }
    },
  },
  mounted() {
    if (!this.isMobile) {
      let cursor = this.$refs.CursorEl;
      document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.pageX - scrollX - 45}px`;
        cursor.style.top = `${e.pageY - scrollY - 45}px`;
      });

      this.getAllHoverableElements();

      // cursorHovers.forEach((item) => {
      //   item.addEventListener("mouseover", () => {
      //     cursor.classList.add("cursor-big");
      //   });
      //   item.addEventListener("mouseleave", () => {
      //     cursor.classList.remove("cursor-big");
      //   });
      // });
    }
  },

  created() {},
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";

.cursor {
  background-color: #fff;
  mix-blend-mode: difference;
  width: 90px;
  height: 90px;
  position: fixed;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  line-height: 1;
  z-index: 9999;
  transform: scale(0.185);
  transition: transform 300ms ease-in-out;
}

.on-mobile {
  display: none;
}

.cursor-big {
  transform: scale(0.8);
}
</style>
