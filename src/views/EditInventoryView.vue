<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div class="container-fluid py-4">
      <div class="row mt-4">
        <div class="col-12">
          <div class="edit__btns">
            <button type="button" class="btn bg-gradient-secondary">
              <img
                src="@/assets/img/save.svg"
                style="width: 1.25vw; margin-right: 0.677vw"
                alt=""
              />Сохранить
            </button>
            <button type="button" class="btn btn-outline-dark">
              <img
                src="@/assets/img/close.svg"
                style="width: 1.563vw; margin-right: 0.677vw"
                alt=""
              />ЗАКРЫТЬ
            </button>
          </div>
          <drop-down></drop-down>
          <div class="card">

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
btn-outline-dark {
  display: flex;
  align-items: center;
}
.bg-gradient-secondary {
  display: flex;
  background: linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%);
  border-radius: 8px;
  align-items: center;
}
.edit__btns {
  padding-left: 1.25vw;
  padding-right: 3.646vw;
  display: flex;
  justify-content: space-between;
}
</style>