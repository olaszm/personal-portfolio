<template>
  <div class="wrapper project__container" ref="projects_container">
    <ProjectCard
      v-for="(item, index) in projects"
      :key="index"
      :index="index"
      :project="item"
    />
  </div>
</template>

<script>

import { gsap, ScrollTrigger, CSSPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, CSSPlugin);

import ProjectCard from "@/components/ProjectCard";
import axios from "axios";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: []
    };
  },
  mounted() {
      axios.get("../db.json").then(({ data }) => {
      this.projects = data;
    });

    const projects = [...document.querySelectorAll(".project")];

    let tl = gsap.timeline({});

    projects.forEach((item, i) => {
      tl.from(item.children[0], {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
          scrub: i * 0.4,
        },
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      }).from(item.children[1], {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 50%",
          scrub: i * 0.4,
          toggleActions: "play none none none",
        },
        y: "100%",
        opacity: 0,
        delay: 0.3,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_variables.scss";

.project__container {
  margin: 0rem auto;
}
</style>
