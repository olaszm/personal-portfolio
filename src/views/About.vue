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
        am a big fan of Vue.js thanks to the
        <a
          class="hoverable"
          href="https://coding.garden/#/"
          rel="noopener"
          target="_blank"
        >Coding Garden community</a>. I'm passionate about anything related to technology and learning new skills and tools. In my
        freetime I like to listen to
        <a
          class="hoverable"
          href="https://lexfridman.com/podcast/"
          target="_blank"
          rel="noopener"
        >Lex Fridman’s</a> podcast, watch other coding
        related things and rock climb!
      </p>
      <p>
        If you want to work with me, drop me an email so we can discuss about
        projects and ideas!
      </p>
    </div>
    <div class="about__contact">
      <a href="mailto:martin1olasz@gmail.com" class="hoverable">say hello</a>
      <span>◦</span>
      <a href="../../martin_olasz_CV.pdf" class="hoverable">resume</a>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: `Martin Olasz Front End Developer`,
    titleTemplate: "%s | About",
    meta: [
      {
        name: "description",
        content: ` Hi, My name is Martin and I am a self taught front-end developer from
        Hungary, based in London looking for freelance and full-time job
        opportunities.`,
        vmid: "description",
      },
    ],
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_variables.scss";
.about {
  margin-top: 3rem;
  margin-bottom: 5rem;
  width: 60%;
   @media (max-width: $mobile) {
      width: 90%;
    }
  &__me {
    margin-bottom: 2rem;
    min-width: 250px;
    a {
      color: $primary;
    }
    p {
      margin: 1rem 0;
      line-height: 145%;
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

