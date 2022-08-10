<template>
  <ProjectSection />
</template>

<script>
import ProjectSection from "@/components/ProjectSection.vue";
export default {
  components: {
    ProjectSection,
  },

  metaInfo: {
    title: `Martin Olasz Front End Developer`,
    titleTemplate: "%s | Projects",
    meta: [
      {
        name: "description",
        content: `Your business needs a website to boost your sales? You need a modern, clean website to get started advertising yourself. Look no further! Say hello, and let's have a chat about your project!`,
        vmid: "description",
      },
    ],
  },
  data() {
    return {};
  },
};
</script>

<style></style>
