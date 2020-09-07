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
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          name: "David Lizom motion designer",
          details:
            "David Lizom is a talented freelance Illustrator and Motiond Designer from Hungary. He needed an online portfolio to boost his freelancing career as an Illustrator & Motion Designer.",
          src: "lizom_preview.png",
          slug: "david-lizom-portfolio",
        },
        {
          name: "Cassiopeia plant shop",
          details:
            "Cassiopeia is a small plant shop for home & office plants. I enjoy using mock-ups and UI kits so I can focus more on functionality. I've found this cool minimalistic Figma kit so I built it.",
          src: "cassio_preview.png",
          slug: "cassiopeia-plant-shop",
        },
        {
          name: "Personal portfolio",
          details:
            "This is my personal online portfolio with some interactive elements.",
          src: "me_preview.png",
          slug: "personal-portfolio",
        },
        {
          name: "Jakó Cukrászda",
          details:
            "Jakó Cukrászda is a small bakery/ice-cream shop established in 1989 in my hometown.",
          src: "jako_preview.png",
          slug: "jako-bakery",
        },
      ],
    };
  },
  mounted() {
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
