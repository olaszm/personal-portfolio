<template>
  <header>
    <nav class="wrapper">
      <div class="logo">
        <router-link to="/" v-magnetic class="hoverable">
          <h2>MO</h2>
        </router-link>
      </div>

      <div class="menu">
        <img class="hoverable" src="@/assets/hamburger.svg" @click="openMenu" alt />
      </div>
    </nav>
  </header>
</template>

<script>
import { EventBus } from "@/plugins/eventbus.js";
export default {
  methods: {
    openMenu() {
      EventBus.$emit("openMenu", true);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/style/_variables.scss";

header {
  width: 100%;
  height: 90px;
  nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      a {
        &::after {
          display: none;
        }
      }
    }
  }
  @media (max-width: $mobile) {
    height: 65px;
    position: fixed;
    top: 0;
    background-color: $black;
  }
}
</style>
