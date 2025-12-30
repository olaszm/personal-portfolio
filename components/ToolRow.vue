<template>
    <div class="tool_container">
        <div v-for="(tool, idx) in tools.slice(0, tools.length)" :key="idx">
            <Tool :tool="tool"></Tool>
        </div>
    </div>
</template>


<script lang="ts" setup>
interface Tool {
    name: string,
    icon: string
}

interface Props {
    tools: Array<Tool>
}


const { tools } = defineProps<Props>()

</script>


<style scoped>
.tool_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.25rem 1.5rem;
    width: 85%;
    margin: 0 auto;
}
</style>
