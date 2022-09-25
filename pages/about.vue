<script lang="ts" setup>
</script>


<template>
	<div>
		<p>
			Hi, My name is Martin and I am a front-end developer from Hungary,
			based in London.
		</p>
		<p>
			My largest body of work has been building front-end applications
			with React.js with various CSS libraries. I've also worked a fair
			amount with Django and Postgres in the backend while I was working
			as a full-stack developer.
		</p>
		<p>
			Outside of work I enjoy 🧗‍♂️ rock climbing, live concerts and reading
			about software developement.
		</p>
		<p>
			If you want to work with me, drop me an email so we can discuss
			about projects and ideas!
		</p>
        
        <div class="link_container">
            <Button  href='mailto:martin1olasz@gmail.com'>say hello</Button>
				<span>◦</span>
            <Button  href="/martin_olasz_CV.pdf">resume</Button>
        </div>
	</div>
</template>

<style lang="scss" scoped>

p {
    margin: 1.55rem 0;
	line-height: 1.55;
	font-size: 1rem;
}

.link_container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: .75rem;
}

</style>