<template>
  <div class="home">
    <HeroSection />
    <ToolsSection />
    <ProjectSection />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ToolsSection from "@/components/ToolsSection";
export default {
  components: { ToolsSection, HeroSection, ProjectSection },
};
</script>


<style lang="scss" scoped>
@import "@/style/_variables.scss";
</style>