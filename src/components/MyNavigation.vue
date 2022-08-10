<template>
  <header>
    <nav class="wrapper">
      <div class="logo">
        <router-link to="/" v-magnetic class="hoverable">
          <img src="@/assets/emblem_white.svg" alt="">
        </router-link>
      </div>

      <div class="menu">
        <img class="hoverable" src="@/assets/hamburger.svg" @click="toggleMenu" alt />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    toggleMenu: Function
  }
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
      img {
        height: 40px;
        width: auto;
      }
      a {
        &::after {
          display: none;
        }
      }
    }
  }
  @media (max-width: $mobile) {
    height: 60px;
    position: fixed;
    top: 0;
    z-index: 5;
    background-color: $black;
    box-shadow: 0 0px 10px rgba(255, 255, 255, 0.199);

  }
}
</style>
