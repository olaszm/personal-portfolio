<template>
    <select name="select-input" class="custom-select">
        <button>
            <selectedcontent></selectedcontent>
        </button>
        <label>Select a language</label>


        <option v-for='opt in selectOptions' :value='opt.value' :selected="opt.selected">{{ opt.label }}</option>
    </select>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
const { currentTheme } = inject<{ currentTheme: Ref<string> }>('theme') || { currentTheme: ref("light") }

interface Props {
    defaultValue: string
    selectOptions: SelectOption[]
}

type SelectOption = {
    value: string
    label: string
    selected: boolean
}

const bgColor = computed(() => currentTheme.value === 'dark' ? 'var(--secondary)' : 'var(--grey)')
const { selectOptions } = defineProps<Props>()
</script>

<style scoped>
select {
    flex: 1;
}

/* Opt-in to customizable select */
select,
select::picker(select) {
    appearance: base-select;
}

select {
    border-radius: 6px;
    border: 1px solid #dddddd;
    background: v-bind(bgColor);
    transition: 0.4s;
    font-size: 0.75rem;
    width: fit-content;


    &::picker-icon {
        display: none;
    }
}

selectedcontent {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 4px 8px;
}


/* Styling the popover part */
.custom-select::picker(select) {
    width: 250px;
    margin: 0.5rem 0;
    padding-top: 8px;
    border: none;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    background: v-bind(bgColor);

}

label {
    color: var(--font-color);
    padding: 10px 16px;
}

option {
    color: var(--font-color);
    cursor: pointer;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: stretch;
    gap: 10px;

    &:first-of-type {
        border-radius: 8px 8px 0 0;
    }

    &:last-of-type {
        border-radius: 0 0 8px 8px;
    }

    &::checkmark {
        display: none;
    }
}


option:hover,
.hover {
    background-color: var(--ascend);
}

option:active,
.active {
    background-color: var(--ascend)
}

option:disabled,
.disabled {
    background-color: var(--white);
    color: var(--grey);
    pointer-events: none;
}
</style>
