<template>
  <div class="wrapper">
    <div class="tools__container">
      <h3 ref="section_title">Some of my favourite tools to work with</h3>
      <div class="tools__row" ref="first_row">
        <div class="tool" v-for="(item, index) in rowItems" :key="index">
          <h2>
            <font-awesome-icon :icon="item.icon" />
          </h2>
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="tools__row" ref="second_row">
        <div class="tool" v-for="(item, index) in rowItemsTwo" :key="index">
          <div>
            <h2> 
              <font-awesome-icon :icon="item.icon" />
            </h2>
          </div >
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      tools: [
        { name: "HTML 5", icon: "fa-brands fa-html5" },
        { name: "CSS 3", icon: "fa-brands fa-css3" },
        {
          name: "JavaScript",
         
          icon: "fa-brands fa-js",
        },
        { name: "React.js", icon: "fa-brands fa-react" },
        { name: "Figma", icon: "fa-brands fa-figma" },
        { name: "Node.js", icon: "fa-brands fa-node-js" },
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "Github", icon: "fa-brands fa-github" },
      ],
    };
  },
  computed: {
    rowItems() {
      let copy = [...this.tools];
      return copy.splice(0, 4);
    },
    rowItemsTwo() {
      let copy = [...this.tools];
      return copy.splice(4, 8);
    },
  },
  mounted() {
    const { first_row, second_row, section_title } = this.$refs;

    gsap.from(section_title, {
      x: "-50%",
      opacity: 0,
      delay: 0.5,
      duration: 0.65,
      ease: "power3.out",
    });

    gsap.from([first_row, second_row], {
      y: "100%",
      opacity: 0,
      delay: 0.85,
      duration: 0.6,
      ease: "bounce.out",
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_variables.scss";

.tools__container {
  margin: 5rem 0;
  .tools__row {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 3rem 0;
    .tool {
      display: grid;
      place-items: center;
      img {
        height: 60px;
        width: 60px;
        transition: transform 100ms ease-in-out;
        @media (max-width: $mobile) {
          height: 40px;
          width: 40px;
        }
      }
      p {
        white-space: nowrap;
        margin-top: 0.75em;
        font-weight: lighter;
        font-size: 0.75rem;
      }
    }
  }
}
</style>
