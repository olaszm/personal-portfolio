<template>
  <div class="project wrapper">
    <div class="inner">
      <h2>{{ project.name }}</h2>

      <div class="project__summary">
        <h3>Summary</h3>
        <p>{{ project.summary }}</p>
        <div class="project__summary__links">
          <a
            class="hoverable animate-link"
            rel="noopener"
            :href="project.git"
            target="_blank"
          >See the code</a>
          <span>◦</span>
          <a
            class="hoverable animate-link"
            rel="noopener"
            :href="project.url"
            target="_blank"
          >See live version</a>
        </div>
      </div>

      <div class="image__container">
        <img class="proj-img" :src="`${publicPath}${project.images[0]}.webp`" alt  @click="openImageViewer(0)"/>
        <img class="proj-img" :src="`${publicPath}${project.images[1]}.webp`" alt @click="openImageViewer(1)"/>
      </div>

      <div class="project__my-role">
        <h3>My Role</h3>
        <p>{{ project.my_role }}</p>
      </div>
      <div class="img">
        <img class="proj-img" :src="`${publicPath}${project.images[2]}.webp`" alt @click="openImageViewer(2)" />
      </div>

      <div class="project__other-links">
        <span class="hoverable animate-link">
          <router-link to="/work">Back to Work</router-link>
        </span>
        <span class="hoverable animate-link">
          <router-link
            :to="{
              name: 'ProjectView',
              params: { name: project.next_project },
            }"
          >Next Project</router-link>
        </span>
      </div>
    </div>
    <!-- <ImageViewer v-if="isImageViewerOpen"  :curr='currentImage' :images="project.images"/> -->
  </div>
</template>

<script>
// import ImageViewer from '@/components/ImageViewer'
import { EventBus } from "@/plugins/eventbus.js";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import axios from "axios";

export default {
  name: "Project",
  // components: {ImageViewer},
  metaInfo: {
    title: `Martin Olasz Front End Develiper`,
    titleTemplate: null,
    meta: [
      {
        name: "description",
        content: `Project`,
        vmid: "description",
      },
    ],
  },
  data() {
    return {
      currentImage: 0,
      isImageViewerOpen: false,
      project: {},
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    openImageViewer(indx){
      this.isImageViewerOpen = !this.isImageViewerOpen
      this.currentImage = indx
    }
  },
  computed: {
    getProjectName() {
      return this.project.name;
    },
  },
  mounted() {
    axios.get("../db.json").then(({ data }) => {
      let item = data.find((item) => item.slug === this.$route.params.name);
      this.project = item;
    });


    EventBus.$on('toggleImageViewer', (payload)=>{
      this.isImageViewerOpen =  payload
    })

    // let tl = gsap.timeline({});

    const imgs = [...document.querySelectorAll(".proj-img")];
    const links = [...document.querySelectorAll(".animate-link")];

    links.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
          // markers: true,
        },
        y: 100,
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
      });
    });

    imgs.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
          // markers: true,
        },
        y: 100,
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_variables.scss";

.project {
  .inner {
    margin: 5rem 0;
    h2 {
      text-align: center;
      color: $primary;
    }
    .project__summary,
    .project__my-role {
      margin: 5rem 0;
      p {
        font-size: 0.85rem;
        margin: 1.25rem 0;
        line-height: 145%;
      }
      &__links {
        color: $primary;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-start;

        @media (max-width: $mobile) {
          a {
            font-size: 0.75rem;
            white-space: nowrap;
          }
        }
        span {
          margin: 0 0.5em;
        }
      }
    }
    .image__container {
      margin: 5rem 0;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      img {
        width: 50%;
        height: 350px;
        object-fit: cover;
        &:first-child {
          margin-right: 1rem;
        }
      }
      @media (max-width: $mobile) {
        flex-wrap: wrap;
        img {
          width: 100%;
          margin: 0;
          margin-top: 1rem;
          height: 300px;
          &:first-child {
            margin-right: 0;
          }
        }
      }
    }
    .img {
      margin: 2rem 0;
      width: 100%;
      height: 450px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .project__other-links {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 3rem 0;
      color: $primary;
      @media (max-width: $mobile) {
        a {
          font-size: 0.75rem;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
