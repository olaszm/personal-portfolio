<template>
  <div class="wrapper">
    <div class="inner">
      <div class="flex col">
        <img class="img" 
          src="../assets/404.png" 
          alt="Page not found" 
        />

        <div class="flex col">
          <h4>Oops! There is nothing here!</h4>
          <router-link to="/" 
            class="link hoverable">Take me back
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import "@/style/_variables.scss";

.inner {
  padding-top: 5rem;
}

.flex {
  display: flex;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.img {
  max-height: 375px;
  height: auto;

  @media (max-width: $mobile) {
    max-height: 250px;
  }
}

.col {
  flex-direction: column;
  gap: 0.75em;
}
</style>