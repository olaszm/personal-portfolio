<template>
    <div class="dropdown-item" :class="itemState" @click="navigateTo(route)">
        <ClientOnly v-if="icon" placeholder="Menu">
            <font-awesome-icon class="dropdown-item-icon" size="sm" :icon="icon" />
        </ClientOnly>
        <span class="sub-title">
            {{ text }}
        </span>
    </div>
</template>


<script lang="ts" setup>
const router = useRouter()

interface Props {
    text: string;
    state?: string;
    route: string
    icon?: string,
}

const { text, route, icon, state = 'default' } = defineProps<Props>()

const itemState = computed(() => {
    return {
        hover: state === 'hover',
        disabled: state === 'disabled',
        focus: state === 'focus',
        active: router.currentRoute.value.path === route
    }
})

const navigateTo = (route: string) => {
    if(route.startsWith('/')) {
        router.push(route)
        return
    }

    window.open(route, '_blank', 'noreferrer')
}

</script>


<style scoped>
.dropdown-item {
    cursor: pointer;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: stretch;
    gap: 10px;
}

.dropdown-item:hover,
.hover {
    background-color: var(--ascend);
}

.dropdown-item:active, .active {
    background-color: var(--ascend)
}

.dropdown-item:disabled,
.disabled {
    background-color: var(--white);
    color: var(--grey);
    pointer-events: none;
}

.dropdown-item:first-of-type {
    border-radius: 8px 8px 0 0;
}

.dropdown-item:last-of-type {
    border-radius: 0 0 8px 8px;
}

@media screen and (max-width: 640px){
    .sub-title {
        font-size: 1rem;
    }
}
</style>