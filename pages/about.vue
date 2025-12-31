<script lang="ts" setup>
useHead({
    title: 'About'
})

const { currentLang } = inject<LangContext>('lang')!

type LangContext = {
    currentLang: Ref<langOption>;
    togglePreference: () => void;
}

const enData = [
    `Hi, My name is Martin and I am a front-end developer from Hungary,
    currently based in Budapest. I've lived and worked 8 years in the UK, London.`,
    `My largest body of work has been building front-end applications
            with Vue.js with various CSS libraries. I've also worked a fair
            amount with Django and Postgres in the backend while I was working
            as a junior full-stack developer. I am really interested in functional programming so in my spare time I've started learning Gleam`,
    `Outside of work I enjoy 🧗‍♂️rock climbing, live concerts and reading
            about software developement.`,
    `If you want to work with me, drop me an email so we can discuss
            about projects and ideas!`
]

const huData = [
    `Hello, a nevem Martin és front-end fejlesztő vagyok Magyarországról,
    jelenleg Budapesten élek. 8 évet éltem és dolgoztam az Egyesült Királyságban, Londonban.`,
    `A legnagyobb munkám front-end alkalmazások fejlesztése volt
            Vue.js-sel különböző CSS könyvtárakkal. Elég sokat dolgoztam
            Django-val és Postgres-szel is a backend oldalon, amikor
            junior full-stack fejlesztőként dolgoztam. Nagyon érdekel a funkcionális programozás, így szabadidőmben elkezdtem tanulni a Gleam-et`,
    `Munkán kívül szeretek 🧗‍♂️ sziklamászni, élő koncertekre járni és
            szoftverfejlesztésről olvasni.`,
    `Ha szeretnél velem dolgozni, küldj egy emailt, hogy
            megbeszélhessük a projekteket és ötleteket!`
]
const data = computed(() => {
    return currentLang.value === 'en' ? enData : huData
})

const helperText = computed(() => {
    return currentLang.value === 'en' ? `If you want to download the Hungarian version of my resume, switch the language via
            the language selector in the navigation.` : `Ha le szeretnéd tölteni az önéletrajzom angol verzióját, váltsd át a nyelvet a navigáció nyelvválasztójával.`
})
</script>


<template>
    <div>
        <p v-for='txt, idx in data' :key="idx">
            {{ txt }}
        </p>
        <small class="helper-text">{{ helperText }}</small>
        <div class="link_container">
            <Button href='mailto:martin1olasz@gmail.com'>say hello</Button>
            <span>◦</span>
            <Button v-if="currentLang === 'en'" href="/martin_olasz_CV.pdf">resume</Button>
            <Button v-else href="/martin_olasz_CV_hun.pdf">resume</Button>
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

.helper-text {
    display: inline-flex;
    font-size: .75rem;
    opacity: .5;
    margin-bottom: .95rem;
}
</style>
