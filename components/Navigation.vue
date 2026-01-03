<template>
    <nav class="nav">
        <NuxtLink to="/">
            <IconComponent class="logo" />
        </NuxtLink>

        <div class="button-container">

            <SelectInput v-if="route.name === 'about'" default-value="Select a language"
                :select-options="langSelectOptions" @input="handleSelectInput" />
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
            <Transition>
                <Dropdown class="navigation-list" :isOpen=isDropDownMenuOpen :variant="cardBg">
                    <DropDownItem v-for="item in generalRoutes" :text="item.name" :state="item?.state" :route="item.url"
                        :icon="item.icon">
                    </DropDownItem>

                    <DropdownSeparator />

                    <DropDownItem v-for="item in socialRoutes" :text="item.name" :route="item.url" :icon="item.icon" />
                </Dropdown>
            </Transition>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import IconComponent from "@/assets/logo.svg?component";
import { SelectInput } from "#components";
import { computed, inject } from "vue";
import { type IRoute, type langOption } from '~/utils/types';
const { currentTheme, togglePreference } = inject<ThemeContext>('theme') || {
    currentTheme: ref('light'),
    togglePreference: () => console.warn('Theme provider not found')
}
const { setLang, currentLang } = inject<LangContext>('lang')!
const routes = inject<IRoute[]>('nav-routes')
const { isOpen } = defineProps<Props>()

type ThemeContext = {
    currentTheme: Ref<string>;
    togglePreference: () => void;
}

type LangContext = {
    currentLang: Ref<langOption>
    setLang: (lang: langOption) => void;
}

interface Props {
    toggleModal: () => void
    isOpen: boolean
}

const router = useRouter()
const route = useRoute()
const isDropDownMenuOpen = ref(false)

const cardBg = computed(() => {
    return currentTheme.value === "dark" ? "var(--secondary)" : "var(--grey)"
})


const socialRoutes = computed(() => routes?.filter(r => r.type === 'social'))
const generalRoutes = computed(() => routes?.filter(r => r.type === 'general'))
const langSelectOptions = computed(() => {
    return [
        { label: 'EN', value: 'en' },
        { label: 'HU', value: 'hu' },
    ].map(v => {
        return { ...v, selected: currentLang.value === v.value }
    })
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

const handleSelectInput = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    const v = target.value as langOption
    setLang(v)
}

watch(() => router.currentRoute.value.path, () => {
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

.navigation-list {
    transform-origin: top right;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: all 0.330s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: scale(0);
}
</style>
