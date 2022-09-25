<template>
	<div>
		<div class="social_container">
			<Button
				:href="item.url"
				rel="noopener"
				target="__blank"
				v-for="(item, idx) in socials"
				:key="idx"
			>
				<ClientOnly :placeholder="item.name">
					<font-awesome-icon :icon="item.icon" size="2xl" />
				</ClientOnly>
			</Button>
		</div>
	</div>
</template>



<script lang="ts" setup>
import { reactive } from "vue";

const socials = reactive([
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/martin-o-a038671b5/",
		icon: "fa-brands fa-linkedin",
	},
	{
		name: "GitHub",
		url: "https://github.com/olaszm",
		icon: "fa-brands fa-github",
	},
]);
</script>


<style scoped>
.social_container {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 1rem;
}
</style>