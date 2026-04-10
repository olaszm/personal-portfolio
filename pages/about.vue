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
  `Hi, I'm Martin — a frontend engineer with 4+ years of experience building
  production web apps in React and Vue.js, always with TypeScript.`,
  `Most of my recent work has been at StoryStream, where I've tackled the kind of
  problems that don't have clean solutions: incrementally migrating a 200k+ line
  Angular codebase to Vue without stopping the product, and building an embeddable
  widget experience that runs across dozens of client sites with an isolated,
  lightweight bundle. I care about frontend architecture, performance, and codebases
  that scale.`,
  `I also have backend experience from an earlier fullstack role — Django REST
  APIs, PostgreSQL — so I'm comfortable working across the stack when needed.`,
  `Outside of work: rock climbing, live concerts, and learning Gleam (functional
  programming for the curious).`,
  `I'm currently open to remote frontend or fullstack roles. If something looks
  interesting, drop me an email.`,
]

const huData = [
  `Hello, Martin vagyok — frontend fejlesztő, 4+ év tapasztalattal production
  webalkalmazások építésében React és Vue.js alapokon, TypeScript-tel.`,
  `Az elmúlt évek munkájának nagy részét a StoryStream-nél töltöttem, ahol olyan
  problémákkal foglalkoztam, amelyeknek nincs tiszta megoldásuk: egy 200k+ soros
  Angular kódbázis inkrementális Vue-ra migrálása a termékfejlesztés megállítása
  nélkül, illetve egy beágyazható widget experience építés, amely tucat ügyfél
  weboldalán fut. Fontos számomra a frontend
  architektúra, a teljesítmény és a skálázható kódbázisok.`,
  `Korábbi fullstack szerepkörömből backend tapasztalatom is van — Node.js, Django REST
  API-ok, PostgreSQL — így szükség esetén a teljes stacken tudok dolgozni.`,
  `Munkán kívül: sziklamászás, koncertek és Gleam tanulás (funkcionális programozás
   kíváncsiskodóknak).`,
  `Jelenleg nyitott vagyok remote frontend vagy fullstack pozíciókra. Ha valami
  érdekesnek tűnik, írj egy emailt!`,
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
