<template>
  <div id="app" :class="!isMobile ? 'no-cursor' : ''">
    <MyNavigation :toggleMenu=toggleMenu />
        <router-view v-slot="{ Component }" class="main" :key="$route.fullPath" >
          <transition name="smooth" mode="out-in">
            <component :is="Component"> </component> 
          </transition>
        </router-view>
    <CustomFooter />
    <CursorEl :isMobile="isMobile" />
    <DropDownMenu :isMenuOpen=isDropDownOpen :toggleMenu=toggleMenu />
  </div>
</template>

<script>
import MyNavigation from "@/components/MyNavigation.vue";
import CustomFooter from "@/components/CustomFooter.vue";
import CursorEl from "@/components/CursorEl.vue";
import DropDownMenu from "@/components/DropDownMenu.vue";

export default {
  metaInfo: {
    title: `Martin Olasz Front End Developer`,
    titleTemplate: "%s | Home",
    meta: [
      {
        name: "description",
        content: `Martin Olasz is a Junior Frontend Developer avaiable for freelance and full-time job offers`,
        vmid: "description",
      },
      {
        name: "keywords",
        content:
          "developer,freelance,front-end,website,vue,javascript,html,css,london,",
      },
    ],
  },

  data() {
    return {
      isMobile: false,
      isDropDownOpen: false,
    };
  },
  components: {
    MyNavigation,
    CursorEl,
    DropDownMenu,
    CustomFooter,
  },
  methods: {
    toggleMenu() {
      this.isDropDownOpen = !this.isDropDownOpen
    }
  },
  created() {

    var userAgent = navigator.userAgent.toLowerCase(),
      width = screen.availWidth,
      height = screen.availHeight;


    this.isMobile = checkIfUserIsOnMobileDevice(userAgent);

    function checkIfUserIsOnMobileDevice($userAgent) {
      if ($userAgent.includes("mobi") || $userAgent.includes("tablet")) {
        return true;
      }
      if ($userAgent.includes("android")) {
        if (height > width && width < 800) {
          // Screen is higher than it’s wide, so we have portrait mode
          return true;
        }
        if (width > height && height < 800) {
          // Screen is wider than it’s high, so we have landscape mode
          return true;
        }
      }
      return false;
    }
  },
};
</script>

<style lang="scss">
@import "@/style/main.scss";

.smooth-enter-active,
.smooth-leave-active {
  transition: opacity 300ms;
}
.smooth-leave-to /* .smooth-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.smooth-enter {
  opacity: 0;
}

#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
}

.main {
  min-height: 100vh;
}

body {
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
  position: relative;
}

.no-cursor {
  cursor: none;
}

a {
  color: currentColor;
  position: relative;
  font-weight: bold;
  display: inline-block;
  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: $primary;
  }
  &.router-link-exact-active {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 60%;
      width: 70%;
      z-index: -1;
      //  transform: translateX(-100%);
      background-color: $secondary;
      transition: transform 300ms ease-in;
    }
  }
}
</style>
