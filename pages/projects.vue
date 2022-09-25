<template>
    <div class="container">
        <div class="h2">
            Check out some of the projects I've been working on lately on the side!
        </div>

        <ProjectCard v-for="project in data.projects" :title="project.title" :cover_img="project.cover_img">
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

</template>


<script setup lang="ts">
const { data } = await useFetch('/api/projects')


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