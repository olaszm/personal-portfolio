<script lang="ts" setup>
useHead({
    title: 'About'
})

const data = [
    `Hi, My name is Martin and I am a front-end developer from Hungary,
    currently based in Budapest. I've lived and worked 8 years in the UK, London.`,
    `My largest body of work has been building front-end applications
            with Vue.js with various CSS libraries. I've also worked a fair
            amount with Django and Postgres in the backend while I was working
            as a junior full-stack developer. I am really interested in functional programming so in my spare time I've started learning Gleam`,
    `Outside of work I enjoy 🧗‍♂️ rock climbing, live concerts and reading
            about software developement.`,
    `If you want to work with me, drop me an email so we can discuss
            about projects and ideas!`
]
</script>


<template>
    <div>
        <p v-for='txt, idx in data' :key="idx">
            {{ txt }}
        </p>
        <div class="link_container">
            <Button href='mailto:martin1olasz@gmail.com'>say hello</Button>
            <span>◦</span>
            <Button href="/martin_olasz_CV.pdf">resume</Button>
            <span>◦</span>
            <Button href="/martin_olasz_CV_hun.pdf">resume(HU)</Button>
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
