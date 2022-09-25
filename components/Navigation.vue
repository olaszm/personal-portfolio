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
			<Card v-if="isDropDownMenuOpen" :variant='cardBg' class='menu-dropdown'>
				<div class='menu-dropdown-inner'>
					<NuxtLink class='dropdown-item' :to="item.route" v-for="item in routes">
						{{ item.name.replace(item.name[0], item.name[0].toUpperCase()) }}
					</NuxtLink>
				</div>
			</Card>
		</div>
	</nav>
</template>

<script lang="ts" setup>
import IconComponent from "@/assets/logo.svg?component";
import { computed, inject, Ref } from "vue";
const { currentTheme, togglePreference } = inject<{ currentTheme: Ref, togglePreference: () => void }>('theme')
const { toggleModal, isOpen } = defineProps<Props>()

const router = useRouter()
const routes = [
	{ name: 'home', route: '/' },
	{ name: 'about', route: '/about' },
	// { name: 'work', route: '/work' },
	{ name: 'projects', route: '/projects' },
]

interface Props {
	toggleModal: () => void
	isOpen: boolean
}
const isDropDownMenuOpen = ref(false)

const cardBg = computed(() => {
	return currentTheme.value === "dark" ? "var(--secondary)" : "var(--grey)"
})


const themeSwitcherIcon = computed(() =>
	currentTheme.value === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"
)

const openMenu = () => {
	isDropDownMenuOpen.value = !isDropDownMenuOpen.value
}

const closeMenu = () => {
	if (isDropDownMenuOpen.value) {
		isDropDownMenuOpen.value = false
	}
}

watch(() => router.currentRoute.value.path, (oldv, nextv) => {
	closeMenu()
})

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
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.45);
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
	padding: .55rem .35rem;
	cursor: pointer;
	list-style: none;
}

.dropdown-item:hover {
	background-color: var(--ascend);
	color: var(--font-color);
}


@media all and (max-device-width: 640px) {
	.menu-dropdown {
		width: 100%;
	}
}

@media all and (max-device-width: 320px) {
	.menu-dropdown {
		width: 100%;
	}
}
</style>