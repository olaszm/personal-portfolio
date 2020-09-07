<template>
  <div class="about wrapper">
    <div class="about__me">
      <p>
        Hi, My name is Martin and I am a self taught front-end developer from
        Hungary, based in London looking for freelance and full-time job
        opportunities.
      </p>
      <p>
        Love to create interesting, playful and interactive web applications. I
        am a big fan of Vue.js thanks to the Coding Garden community. In my
        freetime I like to listen to Lex Fridman’s podcast, watch other coding
        related things and rock climb!
      </p>
      <p>
        If you want to work with me, drop me an email so we can discuss about
        projects and ideas!
      </p>
    </div>
    <div class="about__contact">
      <a href="mailto:martin1olasz@gmail.com" class="hoverable">email me</a>
      <span>◦</span>
      <a href="/" class="hoverable">resume</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/_variables.scss";
.about {
  margin-top: 3rem;
  margin-bottom: 5rem;
  &__me {
    margin-bottom: 2rem;
    min-width: 250px;
    p {
      margin: 1rem 0;
      line-height: 140%;
    }
    @media (max-width: $mobile) {
      width: 100%;
    }
  }
  &__contact {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    color: $primary;
    a {
      display: block;
      color: $primary;
      margin: 0 1em;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
