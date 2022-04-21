<template>
  <div class="login__main d-flex">
    <div
      class="login__main-left d-flex justify-content-center gap-8 flex-column align-items-center"
    >
      <login v-if="authorized"></login>
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

  <!-- <register v-else></register> -->
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
.login__main {
  width: 100%;
}
.login__main-left {
  width: 56.25vw;
}
.login__main-right {
  width: 43.75vw;
  background-image: url("@/assets/css/images/behindRocket.png");
  background-size: cover;
}
.login__main-right img {
  width: 37.031vw;
  height: 49.844vw;
}
.login__main-right p {
  position: relative;
  top: -20vw;
}
</style>
