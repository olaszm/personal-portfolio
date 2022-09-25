<template>
	<div id="app">
		<menu-overlay v-if="isOpen" :toggleModal='() => { toggleModal() }' :isOpen="isOpen" />
		<div class="container">
			<navigation 
				:toggleModal='() => { toggleModal() }'
				:isOpen="isOpen"
				:togglePreference="togglePreference"
				/>
			<NuxtLoadingIndicator color="#fca523" />
			<NuxtLayout :name="layout">
				<NuxtPage class="main" />
			</NuxtLayout>
			<custom-footer />
		</div>
	</div>
</template>


<script lang="ts" setup>
import { ref, provide, readonly } from "vue";
import { useTheme } from "@/composables/useTheme";
import { useToggleModal } from '@/composables/useToggleModal';

const { togglePreference, currentTheme } = useTheme();
const { toggleModal, isOpen } = useToggleModal()

const layout = ref("default");

provide('theme', {currentTheme, togglePreference})
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