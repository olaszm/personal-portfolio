<template>
    <div class='tab' :class="tabClasses">
        <span class='tab-text'>{{ text }}</span>

    </div>    
</template>

<script lang='ts' setup>
interface Props {
    text?: string,
    bgcolor?: string
    size?: 'sm' | 'md' | 'lg'
}

const { size, bgcolor, text = 'bruh'} = withDefaults(defineProps<Props>(), {
    text: 'new feature',
    bgcolor: 'var(--secondary)',
    size: 'sm'
}) 


const tabClasses = computed(() => ({
    'tab-md': size === 'md',
    'tab-lg': size === 'lg'
}))


</script>

<style scoped>

.tab {
    align-items: center;
    display: inline-flex;
    background-color: v-bind('bgcolor');
    border-radius: 100px;
    font-size: .75rem;
    height: 22px;
    padding: .65em .75em;
    width: max-content;
}


.tab.tab-md {
    height: 24px;
}


.tab.tab-lg {
    height: 28px;
}


.tab-text {

}

</style>