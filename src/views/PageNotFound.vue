<template>
  <div class="wrapper">
    <div class="inner">
      <div class="flex col">
        <img class="img" src="../assets/404.png" alt="Page not found" />

        <div class="flex col">
          <h4>Oops! There is nothing here!</h4>
          <router-link to="/" class="link hoverable"
            >Take me back</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

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
  height: auto;
  max-height: 375px;
  width: 75%;
}

.col {
  flex-direction: column;
  gap: 0.75em;
}
</style>