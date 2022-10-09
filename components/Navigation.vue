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
			<Dropdown :isOpen=isDropDownMenuOpen :variant="cardBg">
				<DropDownItem v-for="item in routes" :text="item.name" :state="item?.state" :route="item.route" :icon="item.icon">
				</DropDownItem>
			</Dropdown>
		</div>
	</nav>
</template>

<script lang="ts" setup>
import IconComponent from "@/assets/logo.svg?component";
import { computed, inject, Ref } from "vue";
const { currentTheme, togglePreference } = inject<{ currentTheme: Ref, togglePreference: () => void }>('theme')
const { toggleModal, isOpen } = defineProps<Props>()

interface IRoute {
	name: string, route:string, state?: string, icon?: string
}

const router = useRouter()
const routes: IRoute[] = [
	{ name: 'home', route: '/', icon: 'fa-solid fa-house'},
	{ name: 'about', route: '/about', icon: 'fa-solid fa-address-card'},
	// { name: 'work', route: '/work' },
	{ name: 'projects', route: '/projects', icon: 'fa-solid fa-laptop-code' },
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
</style>