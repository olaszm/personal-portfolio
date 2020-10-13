<template>
  <transition name="fade" mode="out-in">
    <div class="overlay__menu wrappe" v-show="isMenuOpen">
      <div class="overlay__menu__inner wrapper">
        <div class="overlay__menu__header">
          <div  class="logo">
            <router-link to="/" >
              <img  src="@/assets/emblem_white.svg" alt="">
            </router-link>
          </div>
          <span class="close-btn hoverable" @click="closeMenu">
            <img src="@/assets/x.svg" alt="X" />
          </span>
        </div>
        <ul @click="closeMenu">
          <li class="menu-item hoverable">
            <router-link to="/">
              Home
            </router-link>
          </li>
          <li class="menu-item hoverable">
            <router-link to="/about">
              About
            </router-link>
          </li>
          <li class="menu-item hoverable">
            <router-link to="/work">
              Work
            </router-link>
          </li>
        </ul>
        <div class="overlay__menu__footer">
          <a href="mailto:martin1olasz@gmail.com" class="hoverable"
            >martin1olasz@gmail.com</a
          >
          <div class="overlay__menu__footer__social">
            <a href="https://github.com/olaszm" rel="noopener" target="_blank">
              <img
                class="hoverable"
                src="@/assets/github-white.svg"
                alt="Github Logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/martin-o-a038671b5/"
              target="_blank"
              rel="noopener"
            >
              <img
                class="hoverable"
                src="@/assets/linkedin-white.svg"
                alt="LinkedIn Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { gsap } from "gsap";
import { EventBus } from "@/plugins/eventbus.js";
export default {
  components: {},
  data() {
    return {
      isMenuOpen: false,
      tween: "",
    };
  },
  methods: {
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
  watch: {
    isMenuOpen(newVal) {
      if (newVal) {
        gsap.from(".menu-item", {
          width: 0,
          opacity: 0,
          duration: 0.4,
          delay: 0.5,
          // ease: "power3.out",
          stagger: 0.1,
        });
      }
    },
  },
  mounted() {
    EventBus.$on("openMenu", (e) => {
      this.isMenuOpen = e;
    });
    // this.tween.play();
  },
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";

.fade-enter-active,
.fade-leave-active {
  transition: all 500ms;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  animation: modal-reverse 500ms cubic-bezier(0.77, 0, 0.18, 1),
    slide-down-reverse 650ms ease 500ms;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-to {
  animation: slide-down 500ms ease, modal 650ms ease 500ms;
}

.overlay__menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $primary-dark;
  height: 100%;
  z-index: 10;
  .overlay__menu__inner {
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      font-family: "Rubik Mono One", sans-serif;
      height: 80%;
      li {
        margin-bottom: 0.75em;
        font-size: 2.55rem;
        text-transform: uppercase;
        transition: all 300ms ease-in;
        position: relative;
        overflow: hidden;
        @media (max-width: $mobile) {
          font-size: 2.25rem;
        }
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 60%;
          width: 70%;
          z-index: -1;
          transform: translateX(-100%);
          background-color: $secondary;
          transition: transform 250ms ease-in;
        }
        &:hover::after {
          transform: translateX(0);
        }
      }
    }
    span {
      font-size: 2rem;
      transition: transform 250ms ease-in;
      &:hover {
        transform: rotate(90deg);
      }
    }
  }
}

.overlay__menu__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  .logo {
    a {
        &::after {
          display: none;
        }
      }
    img {
      height: 45px;
      width: auto;
    }
  }
}

.overlay__menu__footer {
  a {
    &::after {
      content: "";
      display: none;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  &__social {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    a {
      margin-right: 0.5em;
      img {
        height: 40px;
        width: 40px;
      }
    }
  }
}

@keyframes slide-down {
  0% {
    transform: translateY(-100%);
    clip-path: circle(5%);
  }
  70% {
    transform: translateY(5%);
    clip-path: circle(5%);
  }
  100% {
    transform: translateY(0);
    clip-path: circle(5%);
  }
}

@keyframes slide-down-reverse {
  from {
    transform: translateY(0);
    clip-path: circle(5%);
  }
  to {
    transform: translateY(-100%);
    clip-path: circle(5%);
  }
}

@keyframes modal {
  from {
    clip-path: circle(5%);
  }
  to {
    clip-path: circle(100%);
  }
}

@keyframes modal-reverse {
  from {
    clip-path: circle(100%);
  }
  to {
    clip-path: circle(5%);
  }
}
</style>
