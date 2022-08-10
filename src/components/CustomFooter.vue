<template>
  <div class="footer">
    <div class="footer__inner wrapper">
      <div class="footer__inner__contact">
        <h3>Say hello</h3>
        <a class="hoverable email_link" href="mailto:martin1olasz@gmail.com"
          >martin1olasz@gmail.com</a
        >
        <div class="social">
          <a href="https://github.com/olaszm" rel="noopener" target="_blank">
            <img
              class="hoverable"
              src="@/assets/github.svg"
                @click="track('Clicked on GitHub')"
              alt="Github Logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/martin-o-a038671b5/"
            @click="track('Clicked on LinkedIN')"
            target="_blank"
            rel="noopener"
          >
            <img
              class="hoverable"
              src="@/assets/linkedin.svg"
              alt="LinkedIn Logo"
            />
          </a>
        </div>
      </div>
      <div class="footer__inner__site-nav"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    track(param) {
      this.$gtag.event("check_social", {
        event_category: "engagement",
        event_label: param,
        value: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_variables.scss";
.footer {
  font-size: 18px;
  height: 200px;
  &__inner {
    height: 100%;
    position: relative;
    padding-top: 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    &__contact {
      height: 100%;
      display: flex;
      flex-direction: column;
      a {
        display: block;
        color: $secondary;
        margin: 15px 0;
        &::after {
          background-color: transparent;
        }
      }
      .social {
        display: flex;
        a {
          margin: 0rem 0
        }
        img {
          height: 40px;       
          &:first-child {
            margin-right: 1em;
          }
        }
      }
    }
    &::before {
      content: "";
      position: absolute;
      top: 1%;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: $white;
    }
  }
}
</style>
