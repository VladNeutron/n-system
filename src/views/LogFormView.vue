<template>
  <div class="login__main d-flex">
    <div class="login__main-left d-flex flex-column">
      <login v-if="authorized" class="mx-auto my-auto"></login>

      <cookie class="pb-5"></cookie>
    </div>
    <div
      class="login__main-right d-flex flex-column justify-content-center align-items-stretch"
    >
      <img src="@/assets/css/images/rocket-white.png" alt="" />
      <p class="fs-4 text-white fw-bold">
        NEUTRON SYSTEM - Бизнес в Ваших руках
      </p>
      <p class="fs-5 text-white fw-light">
        Автоматизация бизнес-процессов, теперь торговля - это просто
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authorized: true,
    };
  },
};
</script>

<style scoped>
html {
  overflow: hidden;
}
.login__main {
  width: 100%;
  height: 100vh;
}
.login__main-left {
  width: 56.25vw;
  height: 100vh;
}
.login__main-right {
  width: 43.75vw;
  background-image: url("@/assets/css/images/behindRocket.png");
  background-size: cover;
  height: 100vh;
}
.login__main-right img {
  position: relative;
  top: 6vh;
  left: 10vh;
  width: 30.031vw;
  height: 46.844vw;
}
.login__main-right p {
  position: relative;
  top: -13vw;
}
</style>
