<template>
	<div class="tool">
		<ClientOnly :placeholder="tool.name">
			<font-awesome-icon size='2xl' :icon="tool.icon" />
		</ClientOnly>
		<span>{{ tool.name }}</span>
	</div>
</template>



<script lang="ts" setup>
interface Props {
	tool: {
		name: string;
		icon: string;
	};
}

const { tool } = defineProps<Props>();
</script>

<style scoped>
.tool {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: .75rem;
	width:auto;
}

.tool_icon {
	font-size: 1.5rem;
}


.tool > span {
    font-size: .85rem;
    font-weight: lighter;
}
</style>