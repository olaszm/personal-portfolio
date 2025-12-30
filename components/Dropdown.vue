<template>
    <Card v-if="isOpen" :variant="variant" class='menu-dropdown shadow-lg'>
        <slot class='menu-dropdown-inner'>
        </slot>
    </Card>
</template>


<script lang="ts" setup>
interface Props {
    isOpen: boolean
    variant: string
}

const { isOpen } = defineProps<Props>()

</script>


<style scoped>
.menu-dropdown {
    position: absolute;
    top: calc(45px + 10px);
    right: 0;
    width: 300px;
    height: auto;
    padding: 0;
}

.menu-dropdown-inner {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width: 640px) {
    .menu-dropdown {
        width: 100%;
    }
}

@media screen and (max-width: 320px) {
    .menu-dropdown {
        width: 100%;
    }
}
</style>
