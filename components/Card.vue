<template>
    <div class='card'>
        <slot></slot>
    </div>
</template> 


<script lang='ts' setup>
interface Props {
    variant?: string
}

const { variant } = defineProps<Props>()

</script>


<style scoped>
.card {
	background-color: v-bind('variant');
	padding: 1rem;
	border-radius: 8px;
	height: 100%;
	width: 100%;
	transition: all 250ms ease;
}

</style>