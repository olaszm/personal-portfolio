<template>
    <div id="app">
        <menu-overlay v-if="isOpen" :toggleModal='() => { toggleModal() }' :isOpen="isOpen" />
        <div class="container">
            <navigation :toggleModal='() => { toggleModal() }' :isOpen="isOpen" :togglePreference="togglePreference" />
            <NuxtLoadingIndicator color="#fca523" />
            <NuxtLayout name="default">
                <NuxtPage class="main" />
            </NuxtLayout>
            <custom-footer />
        </div>
    </div>
</template>


<script lang="ts" setup>
import { provide } from "vue";
import { useTheme } from "@/composables/useTheme";
import { useToggleModal } from '@/composables/useToggleModal';
import { type IRoute } from '~/utils/types';

useHead({
    titleTemplate: (titleChunk) => { return titleChunk ? `${titleChunk} - Martin Olasz` : 'Martin Olasz'; },
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    meta: [
        { name: 'description', content: `Front-end developer building modern web applications with cutting edge technologies.` },
        {
            name: "keywords",
            content:
                "developer, freelance, front-end, website, vue, react,javascript, html, css, london,",
        },
    ]
})

const { togglePreference, currentTheme } = useTheme();
const { toggleModal, isOpen } = useToggleModal()

const routes: IRoute[] = reactive([
    { name: 'Home', url: '/', icon: 'fa-solid fa-house', type: 'general' },
    { name: 'About', url: '/about', icon: 'fa-solid fa-address-card', type: 'general' },
    { name: 'Projects', url: '/projects', icon: 'fa-solid fa-laptop-code', type: 'general' },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/martin-o-a038671b5/",
        icon: "fa-brands fa-linkedin",
        type: 'social'
    },
    {
        name: "GitHub",
        url: "https://github.com/olaszm",
        icon: "fa-brands fa-github",
        type: 'social'
    },
])

provide('theme', { currentTheme, togglePreference })
provide('nav-routes', routes)

</script>



<style>
@import '@/assets/css/main.css';


#app {
    display: grid;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
}

.main {
    min-height: 100vh;
}

body {
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    position: relative;
}
</style>
