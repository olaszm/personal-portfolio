<template>
    <dialog :open="isOpen" class="menu_overlay">
        <div class="container">
            <Navigation  :toggleModal='() =>{ toggleModal() }' :isOpen="isOpen" />

            <nav class="menu_nav">
                <li class="menu_nav_item" v-for="item in routes" @click.prevent="closeMenuOverlayOnNavigation(item.route)">
                    <NuxtLink>
                         {{ item.name.replace(item.name[0], item.name[0].toUpperCase()) }}
                     </NuxtLink>
                </li>
            </nav>

        </div>
    </dialog>
</template>

<script lang="ts" setup>
const router = useRouter()
const routes = [
    {name: 'home', route: '/'},
    {name: 'about', route: '/about'},
    {name: 'work', route: '/work'},
    {name: 'projects', route: '/projects'},
]

interface Props {
    toggleModal: () => void
    isOpen: boolean
}

const { isOpen, toggleModal } = defineProps<Props>()

const closeMenuOverlayOnNavigation = (path: string) => {
    if(isOpen) {
        toggleModal()
        navigateToRoute(path)
    }
}

const navigateToRoute = (route: string) => {
    router.push(route)
}

</script>


<style scoped>

dialog {
    padding: 0;
    margin: 0;
    border: 0;
}
.menu_overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: var(--primary);
    border-radius: 4px;
    height: 100%;
    width: 100%;
    transition: all 220ms ease-in-out;
}


.menu_nav {
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    justify-content: center;
    align-items: stretch;
}

.menu_nav_item {
    cursor: pointer;
    list-style: none;
    font-size: 1.25rem;
}

@media all and (max-device-width: 640px) {
    .menu_nav {
        align-items: center;
    }
}

</style>