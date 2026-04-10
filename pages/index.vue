<template>
  <div class="container">
    <div>
      <h1 class="intro_title">
        {{ texts.intro }}
      </h1>
      <NuxtLink class="btn intro_title_link" to="/about">{{ texts.cta }}</NuxtLink>
    </div>

    <div class="container">
      <h2 class="h2">{{ texts.toolsHeading }}</h2>
      <ToolRow :tools="tools.slice(0, tools.length)" />
    </div>

    <div class="container">
      <h2 class="h2">{{ texts.workHeading }}</h2>
      <Timeline />
    </div>

    <div class="container">
      <h2 class="h2">{{ texts.projectsHeading }}</h2>

      <ProjectCard v-for="project in projects" :title="project.title" :stack="project.stack"
        :cover_img="project.cover_img">
        <template v-slot:content>
          {{ project.description }}
        </template>
        <template v-slot:footer>
          <Button v-if="project.host_url" :href="project.host_url">{{ texts.seeLive }}</Button>
          <span>
            ●
          </span>
          <Button v-if="project.source_url" :href="project.source_url">{{ texts.seeSource }}</Button>
        </template>
      </ProjectCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Timeline } from "#components";
import { reactive, inject, computed } from "vue";
import { type langOption } from '~/utils/types'
import { localizeProject } from '~/utils/dto';

type LangContext = { currentLang: Ref<langOption> }
const { currentLang } = inject<LangContext>('lang')!

const enTexts = {
  intro: "Hello! I'm Martin a passionate full-stack developer based in Budapest, Hungary",
  cta: "Want to know me better?",
  toolsHeading: "Some of my favourite tools to work with",
  workHeading: "Previous experiences",
  projectsHeading: "Some of my projects",
  seeLive: "see live",
  seeSource: "see source",
}

const huTexts = {
  intro: "Szia! Martin vagyok, szenvedélyes full-stack fejlesztő Budapestről, Magyarországról",
  cta: "Szeretnél jobban megismerni?",
  toolsHeading: "Néhány kedvenc eszközöm",
  workHeading: "Korábbi tapasztalatok",
  projectsHeading: "Néhány projektem",
  seeLive: "megtekintés",
  seeSource: "forráskód",
}

const texts = computed(() => currentLang.value === 'en' ? enTexts : huTexts)

const { data } = await useFetch<ProjectsApiResponse>('/api/projects')
const projects = computed(() =>
  (data?.value?.data ?? []).map(p => localizeProject(p, currentLang.value))
)

useHead({
  title: 'Home',
})

const tools = reactive([
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Vue.js", icon: "devicon-vuejs-plain" },
  { name: "React.js", icon: "devicon-react-plain" },
  { name: "CSS 3", icon: "devicon-css3-plain" },
  { name: "Figma", icon: "devicon-figma-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "Docker", icon: "devicon-docker-plain" },
]);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
}

.container:first-child {
  margin: 3rem 0 0 0;
}

.intro_title {
  font-size: 1.5rem;
  font-weight: 400;
}

.intro_title_link {
  font-weight: 600;
}
</style>
