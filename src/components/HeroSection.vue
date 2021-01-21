<template>
  <div class="hero">
    <!-- <div class="bg" ref="bg"></div> -->
    <div class="hero__inner wrapper">
      <div class="intro">
        <h1 ref="title">
          Hello! I’m Martin a passionate Front-end developer based
          in London
        </h1>
        <p ref="link">
          <router-link to="/about" class="link hoverable">Want to know me better?</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  mounted() {
    const { title, link } = this.$refs;
    let tl = gsap.timeline();

    tl.from([title, link], {
      y: "100%",
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      ease: "ease-in",
      stagger: 0.45,
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_variables.scss";
.hero {
  margin: 5rem 0;
  width: 100%;
  position: relative;
  &__inner {
    // margin-top: 5rem;
    position: relative;
    top: 25%;
    .intro {
      h1 {
        font-size: 1.5rem;
        font-weight: normal;
        max-width: 750px;
      }
      p {
        margin-top: 1rem;
      }
    }
  }
}

.bg {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  background: url("../assets/vector_bg.svg");
  object-fit: cover;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
}
</style>
