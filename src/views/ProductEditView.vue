<template>
  <the-navbar></the-navbar>
  <main class="main-content border-radius-lg">
    <the-header></the-header>
    <div
      class="page__name d-flex justify-content-between align-items-center ms-4"
    >
      <div class="page__name-title text-start">
        <h3>Управление товаром</h3>
        <p>Настройка изображение размеры</p>
      </div>
      <div class="page__name-buttons d-flex gap-3 mx-4">
        <button class="btn btn-outline-dark mb-0">ФИЛЬТРЫ</button>
        <button class="btn bg-gradient-dark mb-0">ФИЛЬТРЫ</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.page__name-buttons button {
  width: 241px;
  height: 47px;
}
</style>
