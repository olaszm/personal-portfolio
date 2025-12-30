<template>
    <div class="container">
        <div>
            <h1 class="intro_title">
                Hello! I’m Martin a passionate Front-end developer based in
                London
            </h1>
            <NuxtLink class="btn intro_title_link" to="/about">Want to know me better?</NuxtLink>
        </div>

        <div class="container">
            <h2 class="h2">Some of my favourite tools to work with</h2>
            <ToolRow :tools="tools.slice(0, tools.length)" />
        </div>
        <div class="container">
            <h2 class="h2">Some of my projects</h2>

            <ProjectCard v-for="project in projects" :title="project.title" :cover_img="project.cover_img">
                <template v-slot:content>
                    {{ project.description }}
                </template>
                <template v-slot:footer>
                    <Button v-if="project.host_url" :href="project.host_url">see live</Button>
                    <span>
                        ●
                    </span>
                    <Button v-if="project.source_url" :href="project.source_url">see source</Button>
                </template>
            </ProjectCard>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

//FIXME: Do error handling here
const { data } = await useFetch<ProjectsApiResponse>('/api/projects')
const projects = computed(() => data?.value?.data || [])

useHead({
    title: 'Home',
})

const tools = reactive([
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "Vue.js", icon: "devicon-vuejs-plain" },
    { name: "React.js", icon: "devicon-react-plain" },
    { name: "Gleam", icon: "devicon-gleam-plain" },
    { name: "Figma", icon: "devicon-figma-plain" },
    { name: "CSS 3", icon: "devicon-css3-plain" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Sqlite", icon: "devicon-sqlite-plain" },
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
