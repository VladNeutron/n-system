<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <div class="container-fluid container__padding">
      <div class="inv__title">
        <p class="inv__title__text">Список инвентаризаций</p>
      </div>
      <div class="inv__buttons">
        <div class="inv__left__btn">
          <button type="button" class="btn bg-gradient-secondary">
            + Новая инвентаризация
          </button>
        </div>
        <div class="inv__right__btn"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-gradient-secondary {
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 8px;
}
.inv__buttons {
  display: flex;
  justify-content: space-between;
}
.inv__title {
  text-align: left;
}
.inv__title__text {
  font-weight: 700;
  font-size: 1.25vw;
  color: #2d3748;
}
.container__padding {
  padding-left: 2.135vw;
  padding-right: 5.208vw;
}
</style>