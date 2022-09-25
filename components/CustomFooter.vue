<template>
	<footer>
		<div class="divider"></div>
        <div class="flex-container">
            <div class="flex-container__left">
                <p class='flex-container__left__text'>
                    Say hello
                </p>
                <Button class="" href="mailto:martin1olasz@gmail.com">martin1olasz@gmail.com</Button>
            </div>
            <SocialContainer />    
        </div>

	</footer>
</template>

<script lang="ts" setup>
</script>


<style scoped>

footer {
    margin: 1.25rem 0;
}

.divider {
	height: 3px;
	width: 100%;
	background-color: var(--font-color);
    margin: 0.5em 0;
}

.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-container__left__text {
    font-weight: bolder;
    margin: 0 0 .5rem 0;
}

</style>
