<template>
	<Card :variant='bgColor'>
		<div class="project_container">
			<div class="image_container">
				<img class="image" :src="coverImgPath" alt="Random photo">
			</div>

			<div class="project_body">
				<div class="project_title">
					<h3>{{ title }}</h3>
				</div>
				<div class="project_content">
					<slot name="content"></slot>
				</div>
				<div class="project_footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</Card>
</template>


<script lang='ts' setup>
import { computed, inject, Ref } from "vue";
const { currentTheme } = inject<{ currentTheme: Ref }>('theme')

interface Props {
	title: string
	cover_img: string
}

const { title, cover_img } = defineProps<Props>()

const bgColor = computed(() => currentTheme.value === 'dark' ? 'var(--secondary)' : 'var(--grey)')


const coverImgPath = computed(() => {
	if(!cover_img) return 'https://placehold.co/600x400'
	return cover_img
})

</script>

<style scoped>
.project_container {
	width: 100%;
	height: 100%;
	font-size: .9rem;
	display: flex;
	justify-content: space-between;
	align-items: stretch;
	gap: 2rem;
}

.project_title>* {
	color: var(--black);
	font-size: 1.3rem;
	font-weight: bold;
}

.project_body {
	flex: 2;
	display: grid;
	grid-template-rows: auto auto 1fr;
	justify-items: start;
	align-items: end;
	gap: 1rem;
	line-height: 145%;
}

.project_footer {
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0 0 1.75rem 0;
}

.image_container {
	flex: 2;
}

.image {
	height: 100%;
	width: 100%;
	min-height: 275px;
	max-height: 325px;
	object-fit: cover;
	border-radius: 8px;
}

@media all and (max-device-width: 640px) {
	.project_container {
		flex-direction: column;
	}


	.image {
		min-height: 175px;
		max-height: 225px;
	}
}
</style>