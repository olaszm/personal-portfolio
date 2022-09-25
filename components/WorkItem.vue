<template>
    <Card :variant="cardBg">
        <div class="accordion" :class="{ 'is-open': isOpen }">
            <div class="accordion-label" @click="toggleIsOpen">
                <h2 class='h3 w-bold'>
                    {{ item.title }}
                </h2>
                <span class="sub-title">
                    {{ formatDate(item.start_date) }} — {{ formatDate(item.end_date) }}
                </span>
            </div>

            <Transition>
                <div class="accordion-details" v-if="isOpen">
                    {{ item.description }}
                </div>
            </Transition>
        </div>
    </Card>
</template>


<script setup lang='ts'>
import { Ref, inject, onMounted, ref } from 'vue';

interface Props {
    item: {
        title: string,
        start_date: string,
        end_date: string,
        description: string,
    },
}

const { currentTheme } = inject<{ currentTheme: Ref }>('theme')

const cardBg = computed(() => {
    return currentTheme.value === "dark" ? "var(--secondary)" : "var(--grey)"
})

const { item } = defineProps<Props>()

const isOpen = ref(false)

const toggleIsOpen = () => {
    isOpen.value = !isOpen.value
}


const formatDate = (date: string) => {
    const formatedDate = date.split('-').slice(0, 2).join('-')
    return formatedDate
}

</script>


<style scoped>
.accordion-label {
    cursor: pointer;
}

.accordion-label>* {
    transition: all 225ms ease-in-out;
}

.accordion-details {
    margin-top: 1.25rem;
    font-size: .9rem;
    line-height: 155%;
}

.accordion {
    overflow-y: hidden;
    /* transition: all 2s ease-out; */
}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>