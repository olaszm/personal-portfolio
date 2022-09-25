<template>
	<nav class="nav">
		<NuxtLink to="/">
			<IconComponent class="logo" />
		</NuxtLink>

		<div class="button-container">
			<Button v-if="!isOpen" class="btn-icon" @click.capture="togglePreference">
				<ClientOnly placeholder='themeSwitcher'>
					<font-awesome-icon class="clickable-icon" size="lg" :icon="themeSwitcherIcon" />
				</ClientOnly>
			</Button>
			<Button class="btn-icon menu-overlay-parent" @click.capture="openMenu">
				<ClientOnly placeholder="Menu">
					<font-awesome-icon class="clickable-icon" size="lg"
						:icon="!isOpen ? 'fa-solid fa-bars' : 'fa-solid fa-circle-xmark'" />
				</ClientOnly>
			</Button>
			<Card v-if="isDropDownMenuOpen" variant='var(--secondary)' class='menu-dropdown'>
				<div class='menu-dropdown-inner'>
					<div class='dropdown-item'>
						yo
					</div>
					<div class='dropdown-item'>
						yo
					</div>
					<div class='dropdown-item'>
						yo
					</div>
					<div class='dropdown-item'>
						yo
					</div>
					<div class='dropdown-item'>
						yo
					</div>
				</div>
			</Card>
		</div>
	</nav>
</template>

<script lang="ts" setup>
import IconComponent from "@/assets/logo.svg?component";
import { computed, inject, Ref } from "vue";
const { toggleModal, isOpen } = defineProps<Props>()

interface Props {
	toggleModal: () => void
	isOpen: boolean
}

const isDropDownMenuOpen = ref(true)

const themeSwitcherIcon = computed(() =>
	currentTheme.value === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"
)

const openMenu = () => {
	if (true) {

		isDropDownMenuOpen.value = !isDropDownMenuOpen.value
		return
	}

	toggleModal()
}

const { currentTheme, togglePreference } = inject<{ currentTheme: Ref, togglePreference: () => void }>('theme')

</script>


<style scoped>
.logo {
	max-height: 40px;
	width: 100%;
}

.logo,
.logo>path {
	transition: all 220ms ease-in-out;
}

.nav {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	margin: 0.5rem 0;
	position: relative;
	/* z-index: 10; */
}

.button-container {
	display: flex;
	justify-content: center;
	align-items: center;
}

.clickable-icon {
	color: var(--font-color);
	transition: all 220ms ease-in-out;
	cursor: pointer;
}


.clickable-icon:hover {
	color: var(--ascend);
}


.menu-overlay-parent {
	position: relative;
}

.menu-dropdown {
	position: absolute;
	top: calc(45px + 10px);
	right: 0;
	width: 300px;
	height: auto;
	padding: 1rem;
}

.menu-dropdown-inner {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.dropdown-item {
	width: 100%;
	border-radius: 8px;
	padding: 0.25rem;
	cursor: pointer;
}

.dropdown-item:hover {
	background-color: var(--ascend);
}
</style>