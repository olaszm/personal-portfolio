<template>
    <a v-if='href' :href="href" :target="href ?? '_blank'" rel='noopener'>
        <slot />
    </a>

    <button v-else class="btn">
        <slot />
    </button>
</template>


<script lang="ts" setup>

interface Props {
    href?: string
}

const { href } = defineProps<Props>()
</script>


<style scoped>
@import '@/assets/css/variables.css';

button {
    font-size: .80rem;
}

a {
    font-size: 1rem;
}

a.btn {
    text-decoration: none;
}

button.btn {
    border: none;
    font-family: inherit;
    padding: 0;
    cursor: pointer;
}


a.btn,
button.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: start;
    gap: .55em;

    padding: 0.25em 0.75em;
    min-width: 10ch;
    min-height: 42px;

    text-align: center;
    line-height: 1.1;

    background-color: var(--secondary);
    color: var(--white);
    border-radius: 4px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);

    transition: 220ms all ease-in-out;
}


.btn:focus {
    outline: 1px solid var(--ascend);
}


.btn.btn-outlined {
    border: 2px solid var(--secondary);
    background-color: transparent;
}


.btn.btn-icon {
    background-color: transparent;
    box-shadow: unset;
    min-width: auto;
    min-height: auto;
}

.btn:hover,
.btn:active {
    filter: brightness(145%);
}


.btn-outlined:hover,
.btn-outlined:active {
    background-color: var(--secondary);
    filter: unset;
}
</style>
