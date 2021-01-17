<template>
  <div class="project" :class="index % 2 == 0 ? 'lefty' : ''">
    <div class="img">
      <img :src="require(`@/assets/${project.src}`)" alt />
    </div>
    <div class="project__info">
      <h3>{{ project.name }}</h3>
      <p>{{ project.details }}</p>
      <router-link
        :to="{ name: 'ProjectView', params: { name: project.slug } }"
        
      >
        <span class="hoverable" @click="track">
          see case study
        </span>
      </router-link>
      <!-- <a class="hoverable" href="#">See case study</a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    index: { type: Number, required: true },
  },
  methods : {
    track(){
       this.$gtag.event('view_case_study', {
        'event_category': 'engagement',
        'event_label': 'See Case Study button clicked',
        'value': 1
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/_variables.scss";

.project {
  margin: 10rem 0;
  height: 450px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  &__info {
    align-self: center;
    width: 45%;
    min-width: 300px;
    h3 {
      color: $secondary;
      font-size: 1.5rem;
      text-shadow: 3px 2px 5px rgba(0, 0, 0, 0.3);
    }
    p {
      margin: 0.85em 0;
      line-height: 145%;
      font-size: 0.9rem;
      text-shadow: 2px 2px 10px black;
    }
    a {
      color: $primary;
      text-shadow: 2px 2px 10px black;
    }

    @media (max-width: $mobile) {
      width: 80%;
      min-width: 225px;
      position: absolute;
      z-index: 2;
      top: 10%;
      right: 0;
      h3 {
        font-size: 1.25rem;
      }
      p {
        margin: 0.75em 0;
        font-size: 0.75rem;
      }
      a {
        font-size: 0.75rem;
      }
    }
  }
  .img {
    height: 100%;
    width: 75%;
    position: fixed;
    left: -40%;
    top: 0;
    position: relative;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }

  @media (max-width: $mobile) {
    height: 300px;
  }
}
.lefty {
  .img {
    order: 2;
    left: unset;
    right: -40%;
  }
  .project__info {
    @media (max-width: $mobile) {
      left: 0;
      right: 0;
    }
  }
}
</style>
