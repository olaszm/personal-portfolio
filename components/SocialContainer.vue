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
import {IRoute} from '../types/main';
import {inject} from 'vue'

const routes = inject<IRoute[]>('nav-routes')
const socials = computed(() => routes.filter((r) => r.type === 'social' ))
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