<template>
  <div class="container">
    <div class="h2">{{ texts.heading }}</div>

    <ProjectCard v-for="project in projects" :stack="project.stack" :title="project.title"
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

</template>


<script setup lang="ts">
import { inject, computed } from 'vue'
import { type langOption, type Project } from '~/utils/types'
import { localizeProject } from '~/utils/dto'

type LangContext = { currentLang: Ref<langOption> }
const { currentLang } = inject<LangContext>('lang')!

const enTexts = {
  heading: "Check out some of the projects I've been working on lately on the side!",
  seeLive: "see live",
  seeSource: "see source",
}

const huTexts = {
  heading: "Nézd meg a projektjeimet, amelyeken mostanában dolgoztam!",
  seeLive: "megtekintés",
  seeSource: "forráskód",
}

const texts = computed(() => currentLang.value === 'en' ? enTexts : huTexts)

useHead({
  title: 'Projects'
})

const { data } = await useFetch<Project[]>('/api/projects')
const projects = computed(() =>
  (data?.value ?? []).map(p => localizeProject(p, currentLang.value))
)

</script>


<style scoped>
.container {
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.75rem;
}
</style>
